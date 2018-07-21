import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'

export class Cats extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            names: {},
            debugInfo: "debiginfo",
            catName: "",
            addButtonEnabled: false,
            columns: [{
                Header: 'Id',
                accessor: 'id'
            }, {
                Header: 'Genus',
                accessor: 'genus',
            }, {
                id: "editCell",
                Header: 'Name',
                accessor: d => this.state.names[d.id] = d.name,
                Cell: row => (
                    <div>
                        <span id={"name_" + row.original.id}>{row.original.name}</span>
                        <input id={"input_" + row.original.id} style={{ display: 'none' }} type="text" defaultValue={row.original.name} placeholder="Cat Name" onBlur={(e) => this.saveEdits(e.target.value, row.original.id)} />
                    </div>
                )
            }, {
                Header: 'isHungry',
                id: 'isHungry',
                accessor: d => d.isHungry.toString()
            }, {
                Header: 'lastFedDate',
                accessor: 'lastFedDate',
            }, {
                id: 'edit',
                accessor: 'id',
                Cell: row => (
                    <div>
                        <button id={"editButton_" + row.original.id} className="btn btn-success" onClick={(e) => this.handleEditClick(e, row.value)}>Edit</button>
                        <button id={"saveButton_" + row.original.id} style={{ display: 'none' }} className="btn btn-warning">Save</button>
                    </div>
                )
            }, {
                id: 'delete',
                accessor: 'id',
                Cell: ({ value }) => (<button className="btn btn-danger" onClick={(e) => this.handleDeleteClick(e, value)}>Delete</button>)
            }]
        }
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleAddChange = this.handleAddChange.bind(this);
        this.refreshTableData = this.refreshTableData.bind(this);
    }
    refreshTableData() {
        fetch('/api/cats', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Cache-Control': 'no-cache'
            }
        }).then(response => response.json())
            .then(data => {
                //console.dir(data);
                this.state.data = data;
                this.setState({
                    table: {
                        columns: this.state.columns,
                        data: this.state.data
                    }
                })
            })
    }
    saveEdits(v, id) {
        //console.log(v + " " + id);
        fetch('/api/cats/' + id, {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            },
            body: JSON.stringify({ "name": v })
        }).then(() => {
            this.refreshTableData();
            document.getElementById("name_" + id).style.display = "block";
            document.getElementById("input_" + id).style.display = "none";
            document.getElementById("editButton_" + id).style.display = "block";
            document.getElementById("saveButton_" + id).style.display = "none";
        })
    }    
    handleAddClick() {
        fetch('/api/cats', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            },
            body: JSON.stringify({ "name": this.state.catName })
        }).then(() => {
            this.refreshTableData();
            this.state.catName = "";
        })
    };
    handleEditClick(e, id) {
        document.getElementById("name_" + id).style.display = "none";
        document.getElementById("input_" + id).style.display = "block";
        document.getElementById("editButton_" + id).style.display = "none";
        document.getElementById("saveButton_" + id).style.display = "block";
    }
    handleDeleteClick(e, id) {
        fetch('/api/cats/' + id, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            }
        }).then(() => {this.refreshTableData()})
    }
    handleAddChange(e) {
        this.setState({ catName: e.target.value });
        var enabled = this.state.catName.length >= 2 && this.state.catName.length <= 20;
        this.state.addButtonEnabled = enabled;
        if (enabled) {
            document.getElementById("validationMessage").style.display = "none";
        } else {
            document.getElementById("validationMessage").style.display = "block";
        }
    }
    render() {
        return (
            <div>
                <h1>Cats</h1>

                <ReactTable
                    data={this.state.data}
                    columns={this.state.columns}
                    defaultPageSize={5}
                    className="-striped -highlight"
                    onFetchData={(state, instance) => {
                        this.setState({ loading: true })
                        fetch('/api/cats')
                            .then(response => response.json())
                            .then(data => {
                                this.setState({ data: data })
                            }
                            )
                    }
                    }
                />

                <p>Cat Name:
                    <input
                        type="text"
                        value={this.state.catName}
                        placeholder="Cat Name"
                        onChange={this.handleAddChange}
                    />
                    <button disabled={!this.state.addButtonEnabled} onClick={this.handleAddClick}>Add Cat</button>
                    <span id='validationMessage' style={{ display: 'none', color: 'red' }}>Cat Name is not valid.</span>
                </p>

                <hr />
                <div>Debug
                    <pre>{this.state.debugInfo}</pre>
                </div>
            </div>
        );
    }
}

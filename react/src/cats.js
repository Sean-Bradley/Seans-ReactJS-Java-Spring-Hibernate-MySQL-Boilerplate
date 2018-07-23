import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'

export class Cats extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            editingId: {},
            debugInfo: "debuginfo",
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
                accessor: 'id',
                Cell: row => (
                    !!this.state.editingId[row.original.id] ?
                        <input id={"input_" + row.original.id} type="text" defaultValue={row.original.name} placeholder="Cat Name" />
                        :
                        <span id={"name_" + row.original.id}>{row.original.name}</span>
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
                    !!this.state.editingId[row.original.id] ?
                        <div>
                            <button id={"saveButton_" + row.original.id} className="btn btn-warning" onClick={(e) => this.handleSaveEdit(row.original.id)}>Save</button>&nbsp;
                            <button id={"cancelButton_" + row.original.id} className="btn btn-secondary" onClick={(e) => this.handleCancelEdit(row.original.id)}>Cancel</button>
                        </div>
                        :
                        <button id={"editButton_" + row.original.id} className="btn btn-success" onClick={(e) => this.handleEditClick(e, row.value)}>Edit</button>
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
        this.handleCancelEdit = this.handleCancelEdit.bind(this);
        this.handleSaveEdit = this.handleSaveEdit.bind(this);
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
                this.setState({
                    data: data,
                    table: {
                        columns: this.state.columns,
                        data: data
                    }
                })
            })
    }
    handleSaveEdit(id) {
        const name = document.getElementById("input_" + id).value;
        fetch('/api/cats/' + id, {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            },
            body: JSON.stringify({ "name": name })
        }).then(() => {
            this.refreshTableData();

            const editingId = this.state.editingId;
            editingId[id] = false;
            this.setState({
                editingId,
            });
        })
    }
    handleCancelEdit(id) {
        const editingId = this.state.editingId;
        editingId[id] = false;
        this.setState({
            editingId,
        });
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
            this.setState({ catName: '' });
        })
    };
    handleEditClick(e, id) {
        const editingId = this.state.editingId;
        editingId[id] = true;
        this.setState({
            editingId,
        });
    }
    handleDeleteClick(e, id) {
        fetch('/api/cats/' + id, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            }
        }).then(() => { this.refreshTableData() })
    }
    handleAddChange(e) {
        const newCatName = e.target.value;
        let enabled = newCatName.length >= 2 && newCatName.length <= 20;
        this.setState({ catName: newCatName, addButtonEnabled: enabled });
    }
    render() {
        let addCatOptions;
        if (this.state.addButtonEnabled) {
            addCatOptions = <button onClick={this.handleAddClick}>Add Cat</button>
        } else {
            addCatOptions = (
                <span>
                    <button disabled>Add Cat</button>
                    <span id='validationMessage' style={{ color: 'red' }}>Cat Name is not valid.</span>
                </span>
            )
        }

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

                <div>
                    <label>
                        Cat Name:
                        <input type="text" value={this.state.catName} onChange={this.handleAddChange} placeholder="Cat Name" />
                    </label>
                    {addCatOptions}
                </div>

                <hr />
                <div>Debug
                    <pre>{this.state.debugInfo}</pre>
                </div>
            </div>
        );
    }
}

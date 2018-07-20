package com.javaSpringRestAPI.controller;

import com.javaSpringRestAPI.exception.ResourceNotFoundException;
import com.javaSpringRestAPI.model.Cat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;
import com.javaSpringRestAPI.repository.CatRepository;

/**
 *
 * @author Sean Bradley
 */
@RestController
@RequestMapping("/api")
public class CatController {

    @Autowired
    CatRepository catRepository;

    @GetMapping("/cats")
    public List<Cat> getAllCats() {
        return catRepository.findAll();
    }

    @PostMapping("/cats")
    public Cat createCat(@Valid @RequestBody Cat cat) {
        return catRepository.save(cat);
    }

    @GetMapping("/cats/{id}")
    public Cat getCatById(@PathVariable(value = "id") Long catId) {
        return catRepository.findById(catId)
                .orElseThrow(() -> new ResourceNotFoundException("Cat", "id", catId));
    }

    @PutMapping("/cats/{id}")
    public Cat updateCat(@PathVariable(value = "id") Long catId, @Valid @RequestBody String name) {

        Cat cat = catRepository.findById(catId)
                .orElseThrow(() -> new ResourceNotFoundException("Cat", "id", catId));

        cat.setName(name);

        Cat updatedCat = catRepository.save(cat);
        return updatedCat;
    }

    @DeleteMapping("/cats/{id}")
    public ResponseEntity<?> deleteCat(@PathVariable(value = "id") Long catId) {
        Cat cat = catRepository.findById(catId)
                .orElseThrow(() -> new ResourceNotFoundException("Cat", "id", catId));

        catRepository.delete(cat);

        return ResponseEntity.ok().build();
    }
}

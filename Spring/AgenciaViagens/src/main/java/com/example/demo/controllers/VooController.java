package com.example.demo.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.ResourceNotFoundException;
import com.example.demo.entities.Voo;
import com.example.demo.repositories.VooRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class VooController {

	@Autowired
	private VooRepository vooRepository;
	
	
	//GET ALL
	@GetMapping("/voos")
	public List<Voo> getAllVoos(){
		return vooRepository.findAll();
	}
	
	//GET
	@GetMapping("/voo/{id}")
	public ResponseEntity<Voo> getVooById(@PathVariable Long id){
		Voo voo = vooRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Voo inexistente"));
		return ResponseEntity.ok(voo);
	}
	
	//POST OU CREATE
	@PostMapping("/voo")
	public Voo createVoo(@RequestBody Voo voo) {
		return vooRepository.save(voo);
	}
	
	//PUT
	@PutMapping("/voo/{id}")
	public ResponseEntity<Voo> updateVoo(@PathVariable Long id, @RequestBody Voo vooDetails){
		Voo voo = vooRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Voo inexistente"));
		voo.setCompanhiaA(vooDetails.getCompanhiaA());
		voo.setPreco(vooDetails.getPreco());
		Voo newVoo = vooRepository.save(voo);
		return ResponseEntity.ok(newVoo);
	}
	
	//DELETE
	@DeleteMapping("/voo/{id}")
	public ResponseEntity<Map<String, Boolean>> deteleVoo(@PathVariable Long id){
		Voo voo = vooRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Voo inexistente"));
		vooRepository.delete(voo);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}
	
}

package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "voo")
public class Voo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "companhia_aerea")
	private String CompanhiaA;
	
	@Column(name = "preco")
	private Double preco;


	
	public Voo() {
		super();

	}
	public Voo(long id, String companhiaA, Double preco) {
		super();
		this.id = id;
		CompanhiaA = companhiaA;
		this.preco = preco;
	}
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getCompanhiaA() {
		return CompanhiaA;
	}
	public void setCompanhiaA(String companhiaA) {
		CompanhiaA = companhiaA;
	}
	public Double getPreco() {
		return preco;
	}
	public void setPreco(Double preco) {
		this.preco = preco;
	}

	
	
}

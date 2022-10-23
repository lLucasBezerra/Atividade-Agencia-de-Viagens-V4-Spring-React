package com.example.demo.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "promocoes")
public class Promocao {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "nome_promocao")
	private String nomePromo;
	
	@Column(name = "desconto")
	private Integer desconto;

	@JsonIgnore
	@OneToMany(mappedBy = "promocao")
	private List<Destinos> destinosEmPromo;
	
	
	
	public Promocao() {
		super();
	}

	public Promocao(Long id, String nomePromo, Integer desconto) {
		super();
		this.id = id;
		this.nomePromo = nomePromo;
		this.desconto = desconto;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNomePromo() {
		return nomePromo;
	}

	public void setNomePromo(String nomePromo) {
		this.nomePromo = nomePromo;
	}

	public Integer getDesconto() {
		return desconto;
	}

	public void setDesconto(Integer desconto) {
		this.desconto = desconto;
	}
}

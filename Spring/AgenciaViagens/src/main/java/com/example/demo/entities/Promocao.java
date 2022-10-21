package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "promocoes")
public class Promocao {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "nome_promocao")
	private String nomePromo;
	
	@Column(name = "desconto")
	private Long desconto;

	
	
	
	
	public Promocao() {
		super();
	}

	public Promocao(Long id, String nomePromo, Long desconto) {
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

	public Long getDesconto() {
		return desconto;
	}

	public void setDesconto(Long desconto) {
		this.desconto = desconto;
	}
}

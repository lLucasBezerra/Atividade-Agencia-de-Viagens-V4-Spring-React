package com.example.demo.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "destinos")
public class Destinos {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "paises")
	private String paises;
	
	@Column(name = "cidade")
	private String cidade;
	
	@Column(name = "obra_relacionada")
	private String obraR;
	
	
	@JsonIgnore
	@ManyToMany(cascade = {
			CascadeType.ALL
	}, mappedBy = "destinos")
	private List<Clientes> clientes;
	
	@ManyToOne
	@JoinColumn(name = "promocao_id")
	private Promocao promocao;

	
	
	
	public Destinos() {
		super();
	}

	public Destinos(long id, String paises, String cidade, String obraR) {
		super();
		this.id = id;
		this.paises = paises;
		this.cidade = cidade;
		this.obraR = obraR;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getPaises() {
		return paises;
	}

	public void setPaises(String paises) {
		this.paises = paises;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getObraR() {
		return obraR;
	}

	public void setObraR(String obraR) {
		this.obraR = obraR;
	}

	public Promocao getPromocao() {
		return promocao;
	}

	public void setPromocao(Promocao promocao) {
		this.promocao = promocao;
	}


}

package com.example.demo.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cliente")
public class Clientes {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "cpf", length = 11)
	private String cpf;

	@Column(name = "origem")
	private String origem;
	
	@Column(name = "dataIda")
	private Date dataIda;

	@Column(name = "dataVolta")
	private Date dataVolta;
	
	
	
	public Clientes() {
		super();
	}

	public Clientes(Long id, String cpf, String origem, Date dataIda, Date dataVolta) {
		super();
		this.id = id;
		this.cpf = cpf;
		this.origem = origem;
		this.dataIda = dataIda;
		this.dataVolta = dataVolta;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getOrigem() {
		return origem;
	}

	public void setOrigem(String origem) {
		this.origem = origem;
	}

	public Date getDataIda() {
		return dataIda;
	}

	public void setDataIda(Date dataIda) {
		this.dataIda = dataIda;
	}

	public Date getDataVolta() {
		return dataVolta;
	}

	public void setDataVolta(Date dataVolta) {
		this.dataVolta = dataVolta;
	}

}

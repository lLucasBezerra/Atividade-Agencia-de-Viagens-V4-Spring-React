package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Destinos;

@Repository
public interface DestinosRepository extends JpaRepository<Destinos,Long>{

}

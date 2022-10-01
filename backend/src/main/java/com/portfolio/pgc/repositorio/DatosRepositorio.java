package com.portfolio.pgc.repositorio;


import com.portfolio.pgc.modelo.Datos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DatosRepositorio extends JpaRepository<Datos, Long> {
    
}

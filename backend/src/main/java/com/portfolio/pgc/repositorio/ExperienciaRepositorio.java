
package com.portfolio.pgc.repositorio;


import com.portfolio.pgc.modelo.Experiencia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExperienciaRepositorio extends JpaRepository<Experiencia, Long>{
    
}

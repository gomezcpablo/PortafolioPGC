
package com.portfolio.pgc.repositorio;

import com.portfolio.pgc.modelo.Idioma;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IdiomaRepositorio extends JpaRepository<Idioma, Long>{
    
    
}

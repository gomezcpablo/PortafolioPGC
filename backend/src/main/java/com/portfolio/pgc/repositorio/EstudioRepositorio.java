
package com.portfolio.pgc.repositorio;

import com.portfolio.pgc.modelo.Estudio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EstudioRepositorio extends JpaRepository<Estudio, Long> {
    
}

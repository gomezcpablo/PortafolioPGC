
package com.portfolio.pgc.repositorio;

import com.portfolio.pgc.modelo.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillRepositorio extends JpaRepository<Skill, Long>{
    
}

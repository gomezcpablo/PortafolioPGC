
package com.portfolio.pgc.controlador;

import com.portfolio.pgc.excepciones.ResourceNotFoundException;
import com.portfolio.pgc.modelo.Idioma;
import com.portfolio.pgc.modelo.Skill;
import com.portfolio.pgc.repositorio.SkillRepositorio;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins ="http://localhost:4200")
public class SkillControlador {
    
    @Autowired
    private SkillRepositorio repositorio;
    
    //Este método sirve para listar todos los idiomas
    @GetMapping("/skills")
    public List<Skill> listarTodosLosSkills(){
    return repositorio.findAll();
    }
    
    //Este metodo sirve para guardar un idioma
    @PostMapping("/skills")
    public Skill guardarSkill(@RequestBody Skill skill){
        return repositorio.save(skill);
    }
        //Este metodo sirve para buscar un idioma por ID
    @GetMapping("/skills/{id}")
    public ResponseEntity<Skill> obtenerSkillPorId(@PathVariable Long id){
        Skill skill;
        skill = repositorio.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("No existe el skill con el id: " + id));
        return ResponseEntity.ok(skill);
    }
    // Este metodo sirve para modificar un skill
    @PutMapping("skills/{id}")
    public ResponseEntity<Skill> actualizarSkill(@PathVariable Long id, @RequestBody Skill detallesSkill){
        Skill skill;
        skill = repositorio.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("No existe el skill con el id: " + id));
       skill.setNombre(detallesSkill.getNombre());
       skill.setPorcentaje(detallesSkill.getPorcentaje());
        
       Skill skillActualizado = repositorio.save(skill);
        return ResponseEntity.ok(skillActualizado);
    }
    // Este metodo sirve para eliminar un idioma
    @DeleteMapping("skills/{id}")
    public ResponseEntity<Map<String,Boolean>> eliminarSkill(@PathVariable Long id){
		Skill skill = repositorio.findById(id)
				            .orElseThrow(() -> new ResourceNotFoundException("No existe el skill con el ID : " + id));
		
		repositorio.delete(skill);
		Map<String, Boolean> respuesta = new HashMap<>();
		respuesta.put("eliminar",Boolean.TRUE);
		return ResponseEntity.ok(respuesta);
    }
    
    
    
    
}

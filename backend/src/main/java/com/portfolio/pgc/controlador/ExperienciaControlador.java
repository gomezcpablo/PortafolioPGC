
package com.portfolio.pgc.controlador;

import com.portfolio.pgc.excepciones.ResourceNotFoundException;
import com.portfolio.pgc.modelo.Experiencia;
import com.portfolio.pgc.repositorio.ExperienciaRepositorio;
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
@CrossOrigin(origins ="http://localhost:4200/")
public class ExperienciaControlador {
    
    @Autowired
    private ExperienciaRepositorio repositorio;

    //Este método sirve para listar todas las experiencias
    @GetMapping("/experiencias")
    public List<Experiencia> listarTodasLasExperiencias() {
        return repositorio.findAll();
    }
    
    //Este metodo sirve para guardar una experiencia
    @PostMapping("/experiencias")
    public Experiencia guardarExperiencia(@RequestBody Experiencia experiencia){
        return repositorio.save(experiencia);
    }
    
    
    //Este metodo sirve para buscar una experiencia por ID
    @GetMapping("/experiencias/{id}")
    public ResponseEntity<Experiencia> obtenerExperienciaPorId(@PathVariable Long id){
        Experiencia experiencia;
        experiencia = repositorio.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("No existe la experiencia con el id: " + id));
        return ResponseEntity.ok(experiencia);
    }
    
    // Este metodo sirve para modificar una experiencia
    @PutMapping("/experiencias/{id}")
    public ResponseEntity<Experiencia> actualizarExperiencia(@PathVariable Long id, @RequestBody Experiencia detallesExperiencia){
       Experiencia experiencia;
        experiencia = repositorio.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("No existe la experiencia con el id: " + id));
       experiencia.setPosition(detallesExperiencia.getPosition());
       experiencia.setEmpresa(detallesExperiencia.getEmpresa());
       experiencia.setPeriodo(detallesExperiencia.getPeriodo());
       experiencia.setLogo(detallesExperiencia.getLogo());
        
       Experiencia experienciaActualizado = repositorio.save(experiencia);
        return ResponseEntity.ok(experienciaActualizado);
    }
    // Este metodo sirve para eliminar una experiencia
    @DeleteMapping("/experiencias/{id}")
    public ResponseEntity<Map<String,Boolean>> eliminarExperiencia(@PathVariable Long id){
		Experiencia experiencia = repositorio.findById(id)
				            .orElseThrow(() -> new ResourceNotFoundException("No existe la experiencia con el ID : " + id));
		
		repositorio.delete(experiencia);
		Map<String, Boolean> respuesta = new HashMap<>();
		respuesta.put("eliminar",Boolean.TRUE);
		return ResponseEntity.ok(respuesta);
    }

}

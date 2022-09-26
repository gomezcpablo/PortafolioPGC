package com.portfolio.pgc.controlador;

import com.portfolio.pgc.excepciones.ResourceNotFoundException;
import com.portfolio.pgc.modelo.Idioma;
import com.portfolio.pgc.repositorio.IdiomaRepositorio;
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
public class IdiomaControlador {

    @Autowired
    private IdiomaRepositorio repositorio;

    //Este método sirve para listar todos los idiomas
    @GetMapping("/idiomas")
    public List<Idioma> listarTodosLosIdiomas() {
        return repositorio.findAll();
    }
    
    //Este metodo sirve para guardar un idioma
    @PostMapping("/idiomas")
    public Idioma guardarIdioma(@RequestBody Idioma idioma){
        return repositorio.save(idioma);
    }
    
    
    //Este metodo sirve para buscar un idioma por ID
    @GetMapping("/idiomas/{id}")
    public ResponseEntity<Idioma> obtenerIdiomaPorId(@PathVariable Long id){
        Idioma idioma;
        idioma = repositorio.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("No existe el idioma con el id: " + id));
        return ResponseEntity.ok(idioma);
    }
    // Este metodo sirve para modificar un idioma
    @PutMapping("idiomas/{id}")
    public ResponseEntity<Idioma> actualizarIdioma(@PathVariable Long id, @RequestBody Idioma detallesIdioma){
        Idioma idioma;
        idioma = repositorio.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("No existe el idioma con el id: " + id));
       idioma.setNombre(detallesIdioma.getNombre());
       idioma.setPorcentaje(detallesIdioma.getPorcentaje());
        
       Idioma idiomaActualizado = repositorio.save(idioma);
        return ResponseEntity.ok(idiomaActualizado);
    }
    // Este metodo sirve para eliminar un idioma
    @DeleteMapping("idiomas/{id}")
    public ResponseEntity<Map<String,Boolean>> eliminarIdioma(@PathVariable Long id){
		Idioma idioma = repositorio.findById(id)
				            .orElseThrow(() -> new ResourceNotFoundException("No existe el empleado con el ID : " + id));
		
		repositorio.delete(idioma);
		Map<String, Boolean> respuesta = new HashMap<>();
		respuesta.put("eliminar",Boolean.TRUE);
		return ResponseEntity.ok(respuesta);
    }

}  

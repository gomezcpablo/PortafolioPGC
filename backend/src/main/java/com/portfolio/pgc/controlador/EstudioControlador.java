
package com.portfolio.pgc.controlador;

import com.portfolio.pgc.excepciones.ResourceNotFoundException;
import com.portfolio.pgc.modelo.Estudio;
import com.portfolio.pgc.repositorio.EstudioRepositorio;

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
@CrossOrigin(origins ="https://port-pgc.web.app/")
public class EstudioControlador {
    @Autowired
    private EstudioRepositorio repositorio;

    //Este método sirve para listar todos los estudios
    @GetMapping("/estudios")
    public List<Estudio> listarTodosLosEstudios() {
        return repositorio.findAll();
    }
    
    //Este metodo sirve para guardar un estudio
    @PostMapping("/estudios")
    public Estudio guardarEstudio(@RequestBody Estudio estudio){
        return repositorio.save(estudio);
    }
    
    
    //Este metodo sirve para buscar un estudio por ID
    @GetMapping("/estudios/{id}")
    public ResponseEntity<Estudio> obtenerEstudioPorId(@PathVariable Long id){
        Estudio estudio;
        estudio = repositorio.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("No existe el estudio con el id: " + id));
        return ResponseEntity.ok(estudio);
    }
    
    // Este metodo sirve para modificar un estudio
    @PutMapping("/estudios/{id}")
    public ResponseEntity<Estudio> actualizarEstudio(@PathVariable Long id, @RequestBody Estudio detallesEstudio){
       Estudio estudio;
                estudio = repositorio.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("No existe el estudio con el id: " + id));
       estudio.setPosition(detallesEstudio.getPosition());
       estudio.setEstablecimiento(detallesEstudio.getEstablecimiento());
       estudio.setPeriodo(detallesEstudio.getPeriodo());
       estudio.setLogo(detallesEstudio.getLogo());
        
       Estudio estudioActualizado = repositorio.save(estudio);
        return ResponseEntity.ok(estudioActualizado);
    }
    // Este metodo sirve para eliminar un estudio
    @DeleteMapping("/estudios/{id}")
    public ResponseEntity<Map<String,Boolean>> eliminarExperiencia(@PathVariable Long id){
		Estudio estudio = repositorio.findById(id)
				            .orElseThrow(() -> new ResourceNotFoundException("No existe el estudio con el ID : " + id));
		
		repositorio.delete(estudio);
		Map<String, Boolean> respuesta = new HashMap<>();
		respuesta.put("eliminar",Boolean.TRUE);
		return ResponseEntity.ok(respuesta);
    }

}

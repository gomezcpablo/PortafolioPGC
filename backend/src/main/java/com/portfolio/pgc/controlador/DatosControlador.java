package com.portfolio.pgc.controlador;

import com.portfolio.pgc.excepciones.ResourceNotFoundException;
import com.portfolio.pgc.modelo.Datos;
import com.portfolio.pgc.repositorio.DatosRepositorio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
public class DatosControlador {
    @Autowired
    private DatosRepositorio repositorio;

    //Este método sirve para listar todos los datos
    @GetMapping("/datos")
    public List<Datos> listarTodosLosDatos() {
        return repositorio.findAll();
    }
    
    //Este metodo sirve para guardar un dato
    @PostMapping("/datos")
    public Datos guardarDatos(@RequestBody Datos datos){
        return repositorio.save(datos);
    }
    
    
    //Este metodo sirve para buscar un dato por ID
    @GetMapping("/datos/{id}")
    public ResponseEntity<Datos> obtenerDatosPorId(@PathVariable Long id){
        Datos datos;
        datos = repositorio.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("No existe el dato con el id: " + id));
        return ResponseEntity.ok(datos);
    }
    
    // Este metodo sirve para modificar un dato
    @PutMapping("/datos/{id}")
    public ResponseEntity<Datos> actualizarDatos(@PathVariable Long id, @RequestBody Datos detallesDatos){
       Datos datos;
                datos = repositorio.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("No existe el dato con el id: " + id));
       datos.setNombre(detallesDatos.getNombre());
       datos.setPosition(detallesDatos.getPosition());
       datos.setCiudad(detallesDatos.getCiudad());
       datos.setLogo(detallesDatos.getLogo());
       datos.setSobremi(detallesDatos.getSobremi());
        
       Datos datosActualizado = repositorio.save(datos);
        return ResponseEntity.ok(datosActualizado);
    }
    
}

package com.portfolio.pgc.modelo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "datos")
public class Datos {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "nombre", nullable = false)
    private String nombre;
    @Column(name = "position", nullable = false)
    private String position;
    @Column(name = "ciudad", nullable = false)
    private String ciudad;
    @Column(name = "foto", nullable = false)
    private String logo;
    @Column(name = "sobremi", nullable = false)
    private String sobremi;

    public Datos() {
    }

    public Datos(Long id, String nombre, String position, String ciudad, String logo, String sobremi) {
        this.id = id;
        this.nombre = nombre;
        this.position = position;
        this.ciudad = ciudad;
        this.logo = logo;
        this.sobremi = sobremi;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    public String getSobremi() {
        return sobremi;
    }

    public void setSobremi(String sobremi) {
        this.sobremi = sobremi;
    }
    
}
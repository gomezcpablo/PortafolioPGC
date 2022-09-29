
package com.portfolio.pgc.modelo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "estudios")
public class Estudio {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "position", nullable = false)
    private String position;
    @Column(name = "establecimiento", nullable = false)
    private String empresa;
    @Column(name = "periodo", nullable = false)
    private String periodo;
    @Column(name = "logo")
    private String logo;  

    public Estudio() {
    }

    public Estudio(Long id, String position, String empresa, String periodo, String logo) {
        super();
        this.id = id;
        this.position = position;
        this.empresa = empresa;
        this.periodo = periodo;
        this.logo = logo;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getEmpresa() {
        return empresa;
    }

    public void setEmpresa(String empresa) {
        this.empresa = empresa;
    }

    public String getPeriodo() {
        return periodo;
    }

    public void setPeriodo(String periodo) {
        this.periodo = periodo;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

}

# 📘 Guía Maestra para Crear Skills del TecNM

**Versión 2.0** - Actualizada con metodología completa del proyecto Simulación

Esta guía documenta la metodología **profesional y probada** para crear skills educativos de alta calidad para las materias del Tecnológico Nacional de México (TecNM).

---

## 🎯 Objetivo

Crear recursos educativos **completos, profesionales y reutilizables** que:
- ✅ Estén 100% alineados con el temario oficial TecNM
- ✅ Tengan contenido de nivel universitario avanzado
- ✅ Incluyan código ejecutable y ejemplos prácticos
- ✅ Sean navegables e intuitivos
- ✅ Sirvan como referencia permanente

## 📊 Estándar de Calidad Comprobado

**Proyecto de referencia:** Simulación (SCD-1022)
- **Archivos .md:** 35 (~20,000 líneas)
- **Archivos .py:** 16 (~3,000 líneas)
- **Cobertura:** 100% del temario
- **Calidad:** Nivel profesional

---

## 🗺️ Metodología Completa (7 Fases)

### Fase 1: Preparación y Análisis

**Objetivo:** Entender completamente el temario oficial

**Pasos:**

1. **Obtener PDF oficial**
   - Descargar de repositorio TecNM
   - Solicitar a coordinación académica

2. **Extraer texto del PDF**
   ```bash
   python tools/pdf_reader.py Nombre_Materia.pdf
   ```

3. **Analizar estructura**
   - Identificar unidades y subtemas
   - Detectar temas padre (ej: 2.2, 2.3 con subsecciones)
   - Contar archivos necesarios

4. **Crear estructura de carpetas**
   ```
   materia-tecnm/
   ├── README.md
   ├── SKILL.md
   ├── Materia.pdf
   ├── pdf_extracted.txt
   ├── INSTALACION.md
   ├── CONTRIBUTING.md
   ├── LICENSE
   ├── CHANGELOG.md
   ├── requirements.txt
   └── content/
       ├── unidad1/
       │   ├── README.md
       │   ├── 1.1.md
       │   ├── 1.2.md
       │   └── codigos/
       │       ├── README.md
       │       ├── 01_ejemplo.py
       │       └── ...
       ├── unidad2/
       └── ...
   ```

**Entregable:** Estructura de carpetas lista

---

### Fase 2: Creación de Archivos Base

**Objetivo:** Crear todos los archivos con estructura básica

**Pasos:**

1. **Crear archivos .md para cada tema**
   - Usar nombres exactos del PDF (ej: `2.2.1.md`)
   - Incluir header con título
   - Agregar referencia al programa

2. **Identificar archivos padre**
   - Temas con subsecciones (ej: 2.2 tiene 2.2.1, 2.2.2, 2.2.3)
   - Crear archivo padre como índice/introducción

3. **Template de archivo base:**
   ```markdown
   # X.Y Título del Tema
   
   Introducción al tema...
   
   ## Subtema 1
   
   Contenido...
   
   ---
   *Referencia: Programa XXX-XXXX - TecNM*
   ```

**Entregable:** Todos los archivos .md creados (~35 archivos)

---

### Fase 3: Enriquecimiento Profesional

**Objetivo:** Expandir cada archivo a 600-700 líneas de contenido profesional

**Estándar por archivo (600-700 líneas):**

#### 1. Teoría Completa (30% - ~200 líneas)
- Definiciones formales
- Fundamentos matemáticos con LaTeX
- Explicaciones detalladas
- Diagramas y tablas

#### 2. Ejemplos Múltiples (25% - ~150 líneas)
- Mínimo 5 ejemplos por archivo
- Ejemplos numéricos paso a paso
- Casos reales de industria
- Comparaciones y análisis

#### 3. Código Funcional (20% - ~120 líneas)
- Python con librerías apropiadas
- Comentarios extensos en español
- Código modular y reutilizable
- Ejemplos ejecutables

#### 4. Ejercicios Prácticos (10% - ~60 líneas)
- Problemas con soluciones completas
- Diferentes niveles de dificultad
- Aplicaciones reales

#### 5. Casos de Estudio (10% - ~60 líneas)
- Empresas reales (Amazon, Boeing, etc.)
- Datos cuantificables
- ROI y análisis económico

#### 6. Recursos Adicionales (5% - ~30 líneas)
- Errores comunes
- Bibliografía
- Links a recursos
- Glosario de términos

**Ejemplo de estructura enriquecida:**

```markdown
# 2.1 Métodos de Generación de Números Pseudoaleatorios

## Introducción

Los números pseudoaleatorios son fundamentales en simulación...

## Generador Congruencial Lineal (LCG)

### Teoría

El método LCG se define como:
$$X_{n+1} = (aX_n + c) \mod m$$

Donde:
- $a$ es el multiplicador
- $c$ es el incremento
- $m$ es el módulo

### Propiedades

Para que un LCG tenga período completo...

### Implementación en Python

```python
class GeneradorLCG:
    """Generador Congruencial Lineal"""
    
    def __init__(self, semilla, a=1103515245, c=12345, m=2**31):
        self.semilla = semilla
        self.a = a
        self.c = c
        self.m = m
        self.actual = semilla
    
    def siguiente(self):
        """Genera el siguiente número pseudoaleatorio"""
        self.actual = (self.a * self.actual + self.c) % self.m
        return self.actual / self.m
```

### Ejemplo Numérico

Dado a=5, c=3, m=16, semilla=7:
- $X_1 = (5 \times 7 + 3) \mod 16 = 38 \mod 16 = 6$
- $X_2 = (5 \times 6 + 3) \mod 16 = 33 \mod 16 = 1$
...

### Caso de Estudio: Intel

Intel utiliza el generador Mersenne Twister en sus procesadores...

### Ejercicios

1. Implementar LCG con parámetros personalizados
2. Comparar con numpy.random
3. Analizar período del generador

### Errores Comunes

❌ Usar m muy pequeño
❌ Elegir a y c sin verificar propiedades
✅ Usar parámetros probados (MINSTD, etc.)

---
*Referencia: Programa SCD-1022 - TecNM*
*Fuentes: Knuth (1997), Law (2015)*
```

**Proceso de enriquecimiento:**

1. Comenzar con 3 archivos modelo
2. Establecer estándar de calidad
3. Replicar en archivos restantes
4. Mantener consistencia de formato

**Entregable:** 35 archivos enriquecidos (~20,000 líneas totales)

---

### Fase 4: Creación de Código Ejecutable

**Objetivo:** Proveer 5-7 ejemplos de código Python por unidad

**Estructura de carpeta de códigos:**

```
unidad1/
└── codigos/
    ├── README.md
    ├── 01_ejemplo_basico.py
    ├── 02_ejemplo_intermedio.py
    ├── 03_ejemplo_avanzado.py
    ├── 04_caso_estudio.py
    └── 05_proyecto_completo.py
```

**Estándar de código Python:**

```python
"""
Unidad X - Ejemplo Y: Título Descriptivo
Descripción breve de qué demuestra este código

Autor: Template TecNM
Materia: Nombre (CLAVE-XXXX)
"""

import numpy as np
import matplotlib.pyplot as plt

def funcion_principal(parametro1, parametro2):
    """
    Descripción de la función
    
    Args:
        parametro1 (tipo): Descripción
        parametro2 (tipo): Descripción
    
    Returns:
        tipo: Descripción del retorno
    
    Example:
        >>> funcion_principal(10, 20)
        30
    """
    # Código bien comentado en español
    resultado = parametro1 + parametro2
    return resultado

if __name__ == "__main__":
    # Ejemplo de uso
    print("="*60)
    print("EJEMPLO: Título")
    print("="*60)
    
    resultado = funcion_principal(10, 20)
    print(f"Resultado: {resultado}")
```

**Tipos de ejemplos por unidad:**

1. **Básico** - Introducción al concepto
2. **Intermedio** - Aplicación práctica
3. **Avanzado** - Caso complejo
4. **Caso de estudio** - Sistema real
5. **Proyecto completo** - Integración de conceptos

**README.md en carpeta de códigos:**

```markdown
# Unidad X: Ejemplos de Código

## Archivos Disponibles

### 01_ejemplo_basico.py
**Tema:** Introducción a...
- Conceptos básicos
- Ejemplo simple

**Ejecutar:**
```bash
python 01_ejemplo_basico.py
```

### 02_ejemplo_intermedio.py
...

## Requisitos

```bash
pip install numpy scipy matplotlib
```

## Conceptos Cubiertos

- ✅ Concepto 1
- ✅ Concepto 2
```

**Entregable:** 15-25 archivos Python ejecutables

---

### Fase 5: Documentación de Navegación

**Objetivo:** Hacer el repositorio intuitivo y fácil de navegar

**Archivos a crear:**

#### 1. README.md Principal (Raíz)

```markdown
# 🎯 Nombre de la Materia - TecNM (CLAVE-XXXX)

<div align="center">

![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)
![Status](https://img.shields.io/badge/Status-Complete-success.svg)

**Recurso educativo completo para [Materia] del TecNM**

[📚 Contenido](#contenido) • [🚀 Inicio Rápido](#inicio-rápido) • [💻 Ejemplos](#ejemplos)

</div>

## 📋 Descripción

Este repositorio contiene material educativo profesional...

## 📚 Contenido

### [Unidad 1: Título](content/unidad1/README.md)
**X archivos • Y líneas • Z ejemplos**

- [1.1 Subtema](content/unidad1/1.1.md)
- [1.2 Subtema](content/unidad1/1.2.md)
...

## 🚀 Inicio Rápido

### Prerrequisitos
```bash
python --version  # 3.8+
pip install -r requirements.txt
```

### Ejecutar Ejemplos
```bash
cd content/unidad1/codigos/
python 01_ejemplo.py
```

## 💻 Ejemplos de Código

[Código de ejemplo inline]

## 📖 Documentación

- [Guía de Instalación](INSTALACION.md)
- [Cómo Contribuir](CONTRIBUTING.md)
- [Changelog](CHANGELOG.md)

## 📊 Estadísticas

- Archivos: XX
- Líneas: YY,YYY
- Ejemplos: ZZ

## 📄 Licencia

MIT License
```

#### 2. README.md por Unidad

```markdown
# Unidad X: Título

## Descripción

Esta unidad cubre...

## Contenido

- [X.1 Subtema](X.1.md)
- [X.2 Subtema](X.2.md)
...

**Ejemplos de código:** [Ver carpeta](codigos/)

## Objetivos de Aprendizaje

Al completar esta unidad:
- ✅ Objetivo 1
- ✅ Objetivo 2

## Recursos Adicionales

- Software: ...
- Libros: ...
- Tiempo estimado: X horas

---

**Navegación:**
- ⬅️ [Unidad anterior](../unidadX/README.md)
- ➡️ [Unidad siguiente](../unidadY/README.md)
```

#### 3. Archivos de Soporte

**INSTALACION.md:**
- Requisitos del sistema
- Instalación paso a paso
- Verificación
- Solución de problemas

**requirements.txt:**
```
numpy>=1.20.0
scipy>=1.7.0
pandas>=1.3.0
matplotlib>=3.4.0
```

**CONTRIBUTING.md:**
- Cómo contribuir
- Estándares de código
- Proceso de revisión

**LICENSE:**
```
MIT License
Copyright (c) 2026 [Autor]
...
```

**CHANGELOG.md:**
```markdown
# Changelog

## [1.0.0] - 2026-XX-XX

### Agregado
- 35 archivos de contenido
- 16 ejemplos de código
- Documentación completa
```

**Entregable:** Repositorio completamente documentado

---

### Fase 6: Validación y Pruebas

**Objetivo:** Asegurar calidad y funcionalidad

**Checklist de validación:**

#### Alineación con PDF
- [ ] Todos los temas del PDF presentes
- [ ] Nombres exactos de temas
- [ ] Estructura jerárquica correcta
- [ ] Numeración consistente

#### Calidad de Contenido
- [ ] 600-700 líneas por archivo
- [ ] Teoría completa y correcta
- [ ] Mínimo 5 ejemplos por archivo
- [ ] Código funcional y probado
- [ ] Ejercicios con soluciones
- [ ] Casos de estudio reales

#### Navegación
- [ ] Todos los links funcionan
- [ ] READMEs en todos los niveles
- [ ] Estructura intuitiva
- [ ] Badges actualizados

#### Código
- [ ] Todos los scripts ejecutan sin errores
- [ ] Dependencias en requirements.txt
- [ ] Comentarios en español
- [ ] Estilo consistente (PEP 8)

#### Documentación
- [ ] README principal completo
- [ ] Guía de instalación clara
- [ ] CONTRIBUTING.md presente
- [ ] LICENSE incluida
- [ ] CHANGELOG actualizado

**Herramientas de validación:**

```bash
# Verificar links
find . -name "*.md" -exec markdown-link-check {} \;

# Contar líneas
wc -l content/**/*.md

# Probar código
python -m pytest content/

# Verificar estilo
black --check content/
flake8 content/
```

**Entregable:** Skill validado y funcional

---

### Fase 7: Publicación y Mantenimiento

**Objetivo:** Hacer el skill accesible y mantenerlo actualizado

**Pasos:**

1. **Preparar para GitHub**
   ```bash
   cd materia-tecnm
   git init
   git add .
   git commit -m "Initial commit: Skill completo de [Materia]"
   ```

2. **Crear repositorio en GitHub**
   - Nombre: `materia-tecnm`
   - Descripción: "Recurso educativo completo para [Materia] del TecNM"
   - Topics: `tecnm`, `educacion`, `python`, `isc`
   - Licencia: MIT

3. **Subir a GitHub**
   ```bash
   git remote add origin https://github.com/usuario/materia-tecnm.git
   git branch -M main
   git push -u origin main
   ```

4. **Configurar repositorio**
   - Agregar descripción
   - Configurar topics
   - Habilitar Issues
   - Agregar README.md como página principal

5. **Promoción**
   - Compartir con compañeros
   - Notificar a profesores
   - Agregar al README principal de SKILLS-ISC-TECNM

6. **Mantenimiento continuo**
   - Actualizar con feedback
   - Corregir errores reportados
   - Agregar más ejemplos
   - Mantener dependencias actualizadas

**Entregable:** Skill publicado y accesible

---

## 📏 Estándares de Calidad

### Contenido Teórico

| Aspecto | Estándar | Ejemplo (Simulación) |
|---------|----------|----------------------|
| **Longitud** | 600-700 líneas/archivo | 500-700 |
| **Ejemplos** | 5+ por archivo | 5-8 |
| **Código** | Funcional y comentado | Python con docstrings |
| **Ejercicios** | 3-5 por archivo | Con soluciones |
| **Referencias** | Bibliografía actual | Libros + papers |
| **Formato** | Markdown + LaTeX | Ecuaciones renderizadas |

### Código Python

| Aspecto | Estándar |
|---------|----------|
| **Estilo** | PEP 8 |
| **Comentarios** | Español, extensos |
| **Docstrings** | Todas las funciones/clases |
| **Nombres** | Descriptivos en español |
| **Modularidad** | Funciones reutilizables |
| **Imports** | Organizados (stdlib, third-party, local) |
| **Main guard** | `if __name__ == "__main__":` |

### Documentación

| Archivo | Contenido Mínimo |
|---------|------------------|
| **README.md** | Badges, índice, ejemplos, guía, estadísticas |
| **INSTALACION.md** | Requisitos, paso a paso, troubleshooting |
| **requirements.txt** | Todas las dependencias con versiones |
| **CONTRIBUTING.md** | Guía para contribuidores |
| **LICENSE** | MIT License |
| **CHANGELOG.md** | Historial de versiones |

---

## 🛠️ Herramientas y Recursos

### Extracción de PDF

```python
# tools/pdf_reader.py
import PyPDF2

def extraer_texto_pdf(pdf_path, output_path):
    """Extrae texto de PDF y lo guarda"""
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        texto = ""
        for page in reader.pages:
            texto += page.extract_text() + "\n"
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(texto)
    
    print(f"✓ Texto extraído: {output_path}")

if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1:
        extraer_texto_pdf(sys.argv[1], "pdf_extracted.txt")
```

### Generación de Estructura

```bash
#!/bin/bash
# create_structure.sh

MATERIA=$1
NUM_UNIDADES=$2

mkdir -p ${MATERIA}-tecnm/content

for i in $(seq 1 $NUM_UNIDADES); do
    mkdir -p ${MATERIA}-tecnm/content/unidad${i}/codigos
    touch ${MATERIA}-tecnm/content/unidad${i}/README.md
    touch ${MATERIA}-tecnm/content/unidad${i}/codigos/README.md
done

echo "✓ Estructura creada para $MATERIA con $NUM_UNIDADES unidades"
```

### Validación de Links

```bash
# Instalar herramienta
npm install -g markdown-link-check

# Verificar links
find . -name "*.md" -exec markdown-link-check {} \;
```

---

## 💡 Lecciones Aprendidas (Proyecto Simulación)

### Lo que funcionó bien ✅

1. **Enriquecimiento gradual**
   - Comenzar con 3 archivos modelo
   - Establecer estándar claro
   - Replicar en archivos restantes
   - Mantener consistencia

2. **Estructura jerárquica**
   - Archivos padre para temas complejos
   - Subsecciones claras (2.2.1, 2.2.2, etc.)
   - Navegación intuitiva con READMEs

3. **Código ejecutable**
   - Ejemplos que realmente funcionan
   - Comentarios extensos en español
   - Casos de uso reales
   - Template de proyecto completo

4. **Documentación completa**
   - READMEs en cada nivel
   - Badges profesionales
   - Guías de instalación
   - CHANGELOG detallado

5. **Casos de estudio reales**
   - Empresas conocidas (Amazon, Boeing)
   - Datos cuantificables
   - Análisis económico (ROI)

### Desafíos encontrados ⚠️

1. **Tiempo de enriquecimiento**
   - Problema: Cada archivo toma 30-45 min
   - Solución: Crear templates reutilizables

2. **Consistencia de estilo**
   - Problema: Formato varía entre archivos
   - Solución: Definir estándar desde el inicio

3. **Validación de código**
   - Problema: Código con errores
   - Solución: Probar cada ejemplo antes de commitear

4. **Gestión de tokens**
   - Problema: Límite de tokens en sesión
   - Solución: Crear archivos en lotes, usar comandos shell

### Mejores Prácticas 🌟

1. **Comenzar con el final en mente**
   - Definir estructura completa desde el inicio
   - Crear todos los archivos vacíos primero
   - Enriquecer gradualmente

2. **Usar el proyecto Simulación como referencia**
   - Copiar estructura
   - Adaptar contenido
   - Mantener estándar de calidad

3. **Automatizar lo repetitivo**
   - Scripts para crear estructura
   - Templates para archivos
   - Herramientas de validación

4. **Documentar mientras creas**
   - No dejar documentación para el final
   - Actualizar READMEs conforme avanzas
   - Mantener CHANGELOG actualizado

---

## 🎯 Checklist Final

Antes de considerar un skill completo:

### Contenido
- [ ] Todos los temas del PDF cubiertos (100%)
- [ ] 600-700 líneas por archivo
- [ ] Código funcional en cada unidad
- [ ] Mínimo 5 ejemplos por archivo
- [ ] Ejercicios con soluciones
- [ ] Casos de estudio reales

### Estructura
- [ ] Carpetas organizadas lógicamente
- [ ] Nombres de archivos consistentes
- [ ] READMEs en todos los niveles
- [ ] Archivos padre para temas complejos

### Código
- [ ] 15-25 archivos Python
- [ ] Todos ejecutables sin errores
- [ ] Comentarios en español
- [ ] Estilo PEP 8
- [ ] README en carpetas de código

### Documentación
- [ ] README principal profesional con badges
- [ ] INSTALACION.md completa
- [ ] requirements.txt actualizado
- [ ] CONTRIBUTING.md presente
- [ ] LICENSE (MIT)
- [ ] CHANGELOG.md documentado

### Calidad
- [ ] Todos los links funcionan
- [ ] Sin errores tipográficos
- [ ] Formato consistente
- [ ] Ecuaciones LaTeX renderizadas

### Publicación
- [ ] Repositorio en GitHub
- [ ] Descripción clara
- [ ] Topics apropiados
- [ ] README como página principal

---

## 📊 Métricas de Éxito

Un skill de calidad debe alcanzar:

| Métrica | Objetivo | Simulación | Estado |
|---------|----------|------------|--------|
| **Archivos .md** | 30-40 | 35 | ✅ |
| **Líneas teoría** | 18,000-22,000 | ~20,000 | ✅ |
| **Archivos código** | 15-25 | 16 | ✅ |
| **Líneas código** | 2,500-3,500 | ~3,000 | ✅ |
| **Cobertura temario** | 100% | 100% | ✅ |
| **READMEs** | 5-7 | 6 | ✅ |
| **Archivos soporte** | 5-6 | 6 | ✅ |

---

## 🚀 Roadmap para Nuevos Skills

### Prioridad Alta (Semestre actual)
1. Estructura de Datos
2. Bases de Datos
3. Redes de Computadoras
4. Sistemas Operativos

### Prioridad Media (Próximo semestre)
5. Programación Orientada a Objetos
6. Arquitectura de Computadoras
7. Ingeniería de Software
8. Inteligencia Artificial

### Prioridad Baja (Futuro)
9. Graficación
10. Compiladores
11. Administración de Proyectos
12. Seguridad Informática

---

## 📞 Soporte y Contacto

¿Preguntas sobre la metodología?

1. **Revisar proyecto Simulación** como ejemplo completo
2. **Consultar esta guía** para metodología
3. **Abrir issue** en el repositorio principal
4. **Contactar al autor** para dudas específicas

---

## 📚 Recursos Adicionales

### Templates
- [Template de archivo .md](templates/template_archivo.md)
- [Template de README unidad](templates/template_readme_unidad.md)
- [Template de código Python](templates/template_codigo.py)

### Herramientas
- [PDF Reader](../tools/pdf_reader.py)
- [Structure Generator](../tools/create_structure.sh)
- [Link Validator](../tools/validate_links.sh)

### Referencias
- [Proyecto Simulación](../simulacion-tecnm/)
- [Plan de Estudios ISC](../README.md)
- [Programas TecNM](http://www.tecnm.mx/)

---

**Versión:** 2.0  
**Última actualización:** Enero 2026  
**Proyecto de referencia:** [simulacion-tecnm](../simulacion-tecnm/)  
**Autor:** Jesús Olvera - ITCM  
**Líneas de esta guía:** ~1,200

---

## 🎓 Conclusión

Esta metodología ha sido **probada y validada** en el proyecto Simulación, resultando en un recurso educativo de **20,000+ líneas** de contenido profesional.

Siguiendo esta guía, puedes crear skills de alta calidad para cualquier materia del TecNM, contribuyendo a la educación de miles de estudiantes de Ingeniería en Sistemas Computacionales.

**¡Éxito en la creación de tu próximo skill!** 🚀

# 🐍 Tópicos Avanzados de Programación - TecNM (SCD-1027)

<div align="center">

![Python](https://img.shields.io/badge/Python_3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![CustomTkinter](https://img.shields.io/badge/GUI-CustomTkinter-1f425f?style=for-the-badge&logo=python&logoColor=white)
![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-2.0-red?style=for-the-badge&logo=sqlalchemy&logoColor=white)
![Flet](https://img.shields.io/badge/Mobile-Flet-blue?style=for-the-badge&logo=flutter&logoColor=white)
![Status](https://img.shields.io/badge/Status-Encyclopedia_Level-success.svg)

**Recurso educativo "Nivel Enciclopedia" para la materia de Tópicos Avanzados de Programación del TecNM**

[📚 Contenido](#-contenido) • [🚀 Inicio Rápido](#-inicio-rápido) • [💻 Ejemplos](#-ejemplos-de-código) • [📖 Documentación](#-documentación)

</div>

---

## 📋 Descripción

Este repositorio contiene material educativo **profesional y exhaustivo** (nivel libro de texto) para la asignatura **Tópicos Avanzados de Programación (SCD-1027)** del Tecnológico Nacional de México (TecNM). El contenido ha sido expandido más allá de los apuntes básicos para cubrir arquitectura interna, patrones de diseño y estándares de la industria moderna con Python 3.10+.

Incluye:

- ✅ **30 archivos** de contenido teórico con profundidad enciclopédica (~800 líneas/tema).
- ✅ **Documentación detallada** de GUI Moderna (CustomTkinter), Concurrencia (Hilos/Procesos), Acceso a Datos (ORM) y Móvil (Flet).
- ✅ **Códigos de ejemplo** teóricos y laboratorios prácticos en cada unidad.
- ✅ **100% alineado** con el temario oficial TecNM, modernizado al stack 2024.
- ✅ **5 unidades** completas + 1 Unidad Nivelatoria (Unidad 0).

## 🎓 Competencias del Curso

Al completar este curso, serás capaz de:

1. ✅ **Desarrollar** interfaces gráficas modernas y responsivas con Python (CustomTkinter).
2. ✅ **Crear** componentes de software reutilizables y librerías propias distribuibles (PyPI).
3. ✅ **Implementar** soluciones concurrentes y paralelas (Multi-hilo) optimizadas.
4. ✅ **Diseñar** capas de persistencia robustas usando ORM (SQLAlchemy) y bases de datos relacionales.
5. ✅ **Construir** aplicaciones móviles nativas/cross-platform (Android/iOS) usando Flet.

## 📚 Contenido

### [Unidad 0: El Ecosistema Profesional](content/unidad0/README.md)
**5 archivos • Deep Dive • Nivelación**

- [0.1 Configuración del Entorno](content/unidad0/0.1_python_env.md)
- [0.2 Entornos Virtuales](content/unidad0/0.2_virtual_envs.md)
- [0.3 Python Review Avanzado](content/unidad0/0.3_python_review.md)
- [0.4 Calidad de Código y Linters](content/unidad0/0.4_code_quality.md)
- [0.5 Estructura de Proyectos](content/unidad0/0.5_project_structure.md)

---

### [Unidad 1: Interfaces Gráficas de Usuario](content/unidad1/README.md)
**4 archivos • ~3000 líneas • GUI Moderna**

- [1.1 Interfaz Gráfica de Usuarios (Arquitectura)](content/unidad1/1.1.md)
- [1.2 Tipos de Eventos](content/unidad1/1.2.md)
- [1.3 Manejo de Eventos (Binding)](content/unidad1/1.3.md)
- [1.4 Componentes de Control y Diálogos](content/unidad1/1.4.md)

---

### [Unidad 2: Componentes y Librerías](content/unidad2/README.md)
**4 archivos • ~3200 líneas • Modularidad**

- [2.1 Definición conceptual de componentes](content/unidad2/2.1.md)
- [2.2 Uso de librerías del lenguaje (StdLib)](content/unidad2/2.2.md)
- [2.3 Creación de componentes propios (OOP)](content/unidad2/2.3.md)
- [2.4 Creación de paquetes y librerías (PyPI)](content/unidad2/2.4.md)

---

### [Unidad 3: Programación Concurrente](content/unidad3/README.md)
**4 archivos • ~3200 líneas • Threads & Processes**

- [3.1 Hilos vs Procesos y GIL](content/unidad3/3.1.md)
- [3.2 I/O Bound vs CPU Bound](content/unidad3/3.2.md)
- [3.3 Creación y control de hilos (API)](content/unidad3/3.3.md)
- [3.4 Sincronización (Locks, Queues)](content/unidad3/3.4.md)

---

### [Unidad 4: Acceso a Datos](content/unidad4/README.md)
**4 archivos • ~3200 líneas • SQL & ORM**

- [4.1 Persistencia y Modelo Relacional](content/unidad4/4.1.md)
- [4.2 Conexión a BD (SQLAlchemy)](content/unidad4/4.2.md)
- [4.3 CRUD y Seguridad](content/unidad4/4.3.md)
- [4.4 Visualización de Datos (Pandas)](content/unidad4/4.4.md)

---

### [Unidad 5: Programación Móvil](content/unidad5/README.md)
**5 archivos • ~4000 líneas • Flet & Android**

- [5.1 Introducción a móvil con Python](content/unidad5/5.1.md)
- [5.2 Clasificación de Apps (Nativa/PWA/Cross)](content/unidad5/5.2.md)
- [5.3 Ambiente del sistema operativo móvil](content/unidad5/5.3.md)
- [5.4 Desarrollo con Flet Framework](content/unidad5/5.4.md)
- [5.5 Seguridad en dispositivos móviles](content/unidad5/5.5.md)

---

## 🚀 Inicio Rápido

### Prerrequisitos

```bash
# Python 3.10 o superior
python --version

# Entorno Virtual recomendado
python -m venv .venv
source .venv/bin/activate  # Linux/Mac
.venv\Scripts\activate     # Windows
```

### Instalación de Dependencias del Curso

```bash
pip install customtkinter packaging sqlalchemy pandas matplotlib flet
```

## 💻 Ejemplos de Código

### Unidad 1: Hola Mundo Moderno (CustomTkinter)

```python
import customtkinter as ctk

app = ctk.CTk()
app.geometry("400x200")

def button_callback():
    print("Click!")

button = ctk.CTkButton(app, text="Presióname", command=button_callback)
button.pack(padx=20, pady=20)

app.mainloop()
```

### Unidad 3: Hilo simple (Threading)

```python
import threading
import time

def trabajador():
    print("Iniciando tarea...")
    time.sleep(2)
    print("Tarea terminada.")

t = threading.Thread(target=trabajador)
t.start()
```

## 📖 Documentación

### Guías por Unidad

Cada unidad incluye:
- **Teoría Profunda**: Conceptos explicados con nivel de ingeniería (>800 líneas por tema).
- **Diagramas**: Flujos de arquitectura y memoria explicados.
- **Seguridad**: Secciones de OWASP y buenas prácticas.
- **Laboratorios**: Guías paso a paso para ejercicios prácticos.

### Recursos Adicionales

- **Python Docs**: Documentación oficial.
- **CustomTkinter**: Documentación de la librería GUI.
- **SQLAlchemy 2.0 Docs**: La biblia del ORM.
- **Flet Dev**: Guías para desarrollo móvil.

## 🛠️ Tecnologías Utilizadas

- **Core**: Python 3.10+, PIP, Venv.
- **Desktop**: CustomTkinter, Tkinter.
- **Mobile**: Flet (Flutter engine).
- **Data**: SQLAlchemy, SQLite, Pandas, Matplotlib.
- **Tools**: VS Code, Black, Git.

## 📊 Estadísticas del Proyecto

- **Archivos Markdown**: 26
- **Líneas de teoría**: ~16,000+
- **Profundidad**: Enciclopedia Técnica
- **Cobertura del temario**: 100%

## 📝 Cómo Usar Este Recurso

### Para Estudiantes
1.  **Fundamentos**: Asegura dominar la Unidad 0 antes de avanzar.
2.  **Práctica**: No solo copies el código, intenta modificar los parámetros y romperlo para entender cómo funciona.
3.  **Proyectos**: Usa la Unidad 4 y 5 para tu proyecto final de semestre.

### Para Profesores
1.  **Material**: El contenido es suficientemente denso para servir como libro de texto del curso.
2.  **Actualización**: Cubre temas modernos (AsyncIO, Flet) que a menudo faltan en temarios antiguos.

## 🤝 Contribuciones

Este es un recurso educativo abierto. Sugerencias y mejoras son bienvenidas mediante Pull Requests.

## 👨‍💻 Autor

**Jesús Olvera**  
Estudiante de Ingeniería en Sistemas Computacionales  
Instituto Tecnológico de Ciudad Madero

- **GitHub:** [@jjho05](https://github.com/jjho05)
- **Email:** [jjho.reivaj05@gmail.com](mailto:jjho.reivaj05@gmail.com)

---

## 📄 Licencia

Este proyecto contiene material educativo basado en los programas oficiales del Tecnológico Nacional de México (TecNM). El contenido está diseñado exclusivamente para fines educativos.

---

<div align="center">

**⭐ Si este recurso te fue útil, considera darle una estrella ⭐**

[📚 Ver Contenido](#-contenido) • [🚀 Comenzar](#-inicio-rápido) • [💻 Ejemplos](#-ejemplos-de-código)

<br>

**Por mi Patria y por mi Bien**  
**Orgullo Tec Madero** 🦅

©TecNM - Tecnológico Nacional de México  
Instituto Tecnológico de Ciudad Madero  
**Versión:** 1.0 | **Última actualización:** Enero 2026

</div>
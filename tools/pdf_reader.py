"""
PDF Reader Tool - Extractor de texto de PDFs locales
Herramienta para automatizar la lectura de documentos oficiales del TecNM
"""

import sys
import os

try:
    import PyPDF2
except ImportError:
    print("ERROR: PyPDF2 no está instalado.")
    print("Instala con: pip install PyPDF2")
    sys.exit(1)

def extract_text_from_pdf(pdf_path):
    """
    Extrae todo el texto de un archivo PDF.
    
    Args:
        pdf_path (str): Ruta al archivo PDF
        
    Returns:
        str: Texto completo del PDF
    """
    if not os.path.exists(pdf_path):
        return f"ERROR: El archivo {pdf_path} no existe."
    
    try:
        text_content = []
        
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            num_pages = len(pdf_reader.pages)
            
            print(f"📄 Leyendo PDF: {os.path.basename(pdf_path)}")
            print(f"📊 Total de páginas: {num_pages}\n")
            
            for page_num in range(num_pages):
                page = pdf_reader.pages[page_num]
                text = page.extract_text()
                text_content.append(f"--- PÁGINA {page_num + 1} ---\n{text}\n")
            
        return "\n".join(text_content)
    
    except Exception as e:
        return f"ERROR al leer el PDF: {str(e)}"

def extract_section(full_text, section_name):
    """
    Extrae una sección específica del texto.
    
    Args:
        full_text (str): Texto completo del PDF
        section_name (str): Nombre de la sección a buscar
        
    Returns:
        str: Texto de la sección encontrada
    """
    lines = full_text.split('\n')
    section_lines = []
    capturing = False
    
    for line in lines:
        if section_name.lower() in line.lower():
            capturing = True
        
        if capturing:
            section_lines.append(line)
            
            # Detener si encontramos otra sección principal
            if line.strip().startswith(('Unidad', 'UNIDAD', '---')):
                if len(section_lines) > 5:  # Ya capturamos suficiente
                    break
    
    return "\n".join(section_lines)

def save_to_file(content, output_path):
    """Guarda el contenido extraído en un archivo de texto."""
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"✅ Contenido guardado en: {output_path}")

if __name__ == "__main__":
    # Configuración
    PDF_PATH = "/Users/lic.ing.jesusolvera/Documents/PROYECTOS PERSONALES/SKILLS-ISC-TECNM/simulacion-tecnm/Simulacion.pdf"
    OUTPUT_PATH = "/Users/lic.ing.jesusolvera/Documents/PROYECTOS PERSONALES/SKILLS-ISC-TECNM/simulacion-tecnm/pdf_extracted.txt"
    
    # Extraer texto completo
    print("🚀 Iniciando extracción de PDF...\n")
    full_text = extract_text_from_pdf(PDF_PATH)
    
    if not full_text.startswith("ERROR"):
        # Guardar texto completo
        save_to_file(full_text, OUTPUT_PATH)
        
        # Mostrar primeras líneas como preview
        print("\n📋 Preview del contenido extraído:")
        print("=" * 60)
        print(full_text[:1000])
        print("=" * 60)
        print(f"\n✨ Extracción completada. Total de caracteres: {len(full_text)}")
    else:
        print(full_text)

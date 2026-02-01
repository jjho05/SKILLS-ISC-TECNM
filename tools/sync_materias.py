import os
import subprocess
import sys

# Mapeo de Carpetas Locales -> Repositorios Remotos
SKILLS_REMOTES = {
    "top-avanz-prog-tecnm": "https://github.com/jjho05/top-avanz-prog-tecnm.git",
    "simulacion-tecnm": "https://github.com/jjho05/simulacion-tecnm.git",
    "prog-web-tecnm": "https://github.com/jjho05/prog-web-tecnm.git",
    # Agrega aquí nuevas materias siguiendo este formato:
    # "nombre-carpeta": "url-del-repositorio-github"
}

def run_command(command, cwd=None):
    """Ejecuta un comando de shell y retorna el resultado."""
    print(f"Ejecutando: {' '.join(command)}")
    result = subprocess.run(command, cwd=cwd, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error: {result.stderr}")
    return result

def sync_all():
    root_dir = os.getcwd()
    print("🚀 Iniciando Sincronización Global de Skills...")
    
    for folder, remote_url in SKILLS_REMOTES.items():
        folder_path = os.path.join(root_dir, folder)
        
        if not os.path.exists(folder_path):
            print(f"⚠️ Saltando {folder}: Carpeta no encontrada localmente.")
            continue
            
        print(f"\n📦 Sincronizando: {folder}")
        
        # 1. Crear repo temporal dentro de la carpeta
        git_dir = os.path.join(folder_path, ".git")
        
        try:
            # Inicializar git si no existe (o resetearlo)
            run_command(["git", "init"], cwd=folder_path)
            
            # Limpiar remotos previos si existen
            run_command(["git", "remote", "remove", "origin"], cwd=folder_path)
            
            # Agregar el remoto correcto
            run_command(["git", "remote", "add", "origin", remote_url], cwd=folder_path)
            
            # Stage, Commit y Push forzado para asegurar espejo exacto
            run_command(["git", "add", "."], cwd=folder_path)
            run_command(["git", "commit", "-m", "docs: auto-sync from master Skills ISC repo"], cwd=folder_path)
            
            # Push a la rama main
            res = run_command(["git", "push", "-u", "origin", "main", "--force"], cwd=folder_path)
            
            if res.returncode == 0:
                print(f"✅ {folder} sincronizado exitosamente con GitHub.")
            else:
                print(f"❌ Falló la sincronización de {folder}.")
                
        finally:
            # 2. IMPORTANTE: Borrar la carpeta .git para mantener el Mono-repo limpio
            if os.path.exists(git_dir):
                import shutil
                shutil.rmtree(git_dir)
                print(f"🧹 Carpeta .git temporal eliminada en {folder}.")

if __name__ == "__main__":
    sync_all()
    print("\n✨ Sincronización finalizada.")

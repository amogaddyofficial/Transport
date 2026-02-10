import os
import shutil
import zipfile
import re

def create_offline_version():
    source_dir = os.getcwd()
    
    # Version Configuration
    CURRENT_VERSION = "3.2"
    output_zip = f"Transport_v{CURRENT_VERSION}.zip"
    beta_archive = "beta.zip"
    
    build_dir = os.path.join(source_dir, "offline_build")
    
    # 1. Manage Old Versions (Archive to beta.zip)
    # Look for any existing Transport_v*.zip files
    for file in os.listdir(source_dir):
        if file.startswith("Transport_v") and file.endswith(".zip"):
            if file != output_zip:
                # This is an OLD version. Archive it.
                print(f"Archiving old version {file} to {beta_archive}...")
                with zipfile.ZipFile(beta_archive, 'a', zipfile.ZIP_DEFLATED) as beta:
                    beta.write(file, file)
                os.remove(file)
                print(f"Moved {file} to {beta_archive}")
            else:
                # This is the CURRENT version (re-building). Just delete it.
                os.remove(file)

    # Clean previous build dir
    if os.path.exists(build_dir):
        shutil.rmtree(build_dir)
        
    print(f"Creating build directory: {build_dir}")
    
    # Items to exclude
    exclude_items = {
        '.git', '.github', '__pycache__', 'venv', '.vscode', 
        'build_offline.py', output_zip, 'offline_build', 
        'README.txt', 'LICENSE', '.gitignore',
        beta_archive, 'versions', 'transport_offline.zip' # Exclude archive, old versions, and legacy zip
    }
    
    # Copy files
    os.makedirs(build_dir)
    
    for item in os.listdir(source_dir):
        if item in exclude_items:
            continue
            
        src_path = os.path.join(source_dir, item)
        dst_path = os.path.join(build_dir, item)
        
        if os.path.isdir(src_path):
            shutil.copytree(src_path, dst_path)
        else:
            shutil.copy2(src_path, dst_path)
            
    # Modify index.html to remove download button
    index_path = os.path.join(build_dir, "index.html")
    if os.path.exists(index_path):
        print("Modifying index.html for offline version...")
        with open(index_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Remove the download button using regex
        # Looking for the button with id="download-button"
        # We need to be careful to remove the whole line or block
        
        # Simple string replacement if the format is predictable, or regex
        # Regex to match the specific button anchor tag
        pattern = r'<a href="[^"]*" class="menu-button" id="download-button">[\s\S]*?</a>'
        new_content = re.sub(pattern, '', content)
        
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
            
    # Create ZIP
    print(f"Creating ZIP file: {output_zip}")
    with zipfile.ZipFile(output_zip, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(build_dir):
            for file in files:
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, build_dir)
                zipf.write(file_path, arcname)
                
    # Clean up
    print("Cleaning up build directory...")
    shutil.rmtree(build_dir)
    print("Done! Offline version created.")

if __name__ == "__main__":
    create_offline_version()

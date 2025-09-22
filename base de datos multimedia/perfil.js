 // Función para cambiar pestañas
    function switchTab(tabName) {
      // Ocultar todos los contenidos
      document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
      });
      
      // Quitar activo de todas las pestañas
      document.querySelectorAll('.profile-tab').forEach(tab => {
        tab.classList.remove('active');
      });
      
      // Mostrar contenido seleccionado
      document.getElementById('tab-' + tabName).classList.add('active');
      
      // Activar pestaña clickeada
      event.target.classList.add('active');
    }

    // Simular filtros (solo muestra alerta)
    function applyPostFilters() {
      const status = document.getElementById('filter-status').value;
      const sort = document.getElementById('filter-sort').value;
      alert(`Filtrando por: ${status} | Orden: ${sort} - (Demo)`);
    }

    // Navegación móvil
    document.getElementById('nav-toggle').addEventListener('click', function() {
      const navLinks = document.getElementById('nav-links');
      navLinks.classList.toggle('active');
      const icon = this.querySelector('i');
      icon.className = navLinks.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
    });

    // Botón "volver arriba"
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.id = 'back-to-top';
    backToTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });
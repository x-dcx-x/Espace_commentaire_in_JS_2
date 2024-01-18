document.addEventListener("DOMContentLoaded", function() {
    // Récupération des id(s)
    const form = document.querySelector('form');
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const messageInput = document.getElementById('message');
    const commentList = document.getElementById('comment-list');
    const errorMessage = document.getElementById('error-message');

    // Écouteur  pour le formulaire
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validation des champs
        if (firstNameInput.value.trim() === '' || lastNameInput.value.trim() === '' || messageInput.value.trim() === '') {
            errorMessage.style.display = 'block';
            return;
        }

        // Ajout commentaire à la liste

        const newComment = document.createElement('div');
        newComment.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500');

        newComment.innerHTML = `
          <div class="flex-1 py-10 border-t border-gray-200">
            <h3 class="font-medium text-gray-900">${firstNameInput.value} ${lastNameInput.value}</h3>
            <div class="prose prose-sm mt-4 max-w-none text-gray-500">
              <p>${messageInput.value}</p>
            </div>
          </div>
        `;

        commentList.appendChild(newComment);

        //Reset du formulaire
        firstNameInput.value = '';
        lastNameInput.value = '';
        messageInput.value = '';

        // Masquer le message d'erreur
        errorMessage.style.display = 'none';
    });
});
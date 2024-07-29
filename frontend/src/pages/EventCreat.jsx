import React, { useState } from 'react';

const AdminCreateEventPage = () => {
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous enverriez généralement les données à votre API backend
    console.log('Données de l\'événement à envoyer :', eventData);
    alert('Événement créé avec succès !');
    // Réinitialiser le formulaire après soumission
    setEventData({
      title: '',
      date: '',
      location: '',
      description: '',
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Créer un Nouvel Événement</h2>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Titre de l'Événement</label>
              <input
                id="title"
                name="title"
                type="text"
                value={eventData.title}
                onChange={handleInputChange}
                placeholder="Entrez le titre de l'événement"
                required
                className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date de l'Événement</label>
              <input
                id="date"
                name="date"
                type="date"
                value={eventData.date}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              />
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description de l'Événement</label>
              <textarea
                id="description"
                name="description"
                value={eventData.description}
                onChange={handleInputChange}
                placeholder="Entrez la description de l'événement"
                required
                rows="6"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Créer l'Événement
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminCreateEventPage;
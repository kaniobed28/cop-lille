// src/stores/eventStore.js
import { makeAutoObservable } from "mobx";
import { db } from "../../firebase";
import { collection, getDocs, } from "firebase/firestore";

class EventStore {
    
  events = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchEvents = async () => {
    const eventsCollection = collection(db, "events"); // Reference the events collection
    const eventsSnapshot = await getDocs(eventsCollection); // Get documents from the collection
    this.events = eventsSnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        title: data.title,
        description: data.description,
        location: data.location || 'No location',  // Default to 'No location' if null or missing
        startTime: new Date(data.startTime), // Convert to JS Date object
        endTime: new Date(data.endTime), // Convert to JS Date object
      };
    });
  };

  
}

const eventStore = new EventStore();
export default eventStore;

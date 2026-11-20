// Supabase Client and Backend Services for Tourex Website

const SUPABASE_URL = import.meta.env?.VITE_SUPABASE_URL || 'https://ektajyhffgndgnnogbtz.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env?.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrdGFqeWhmZmduZGdubm9nYnR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTUxMDczNTIsImV4cCI6MjExMDY4MzM1Mn0.7dD4b9xAtVBxpHZCqxYkQ_hOc2ahfN4vvvu0EiQuAv0';

const getHeaders = () => ({
  'apikey': SUPABASE_ANON_KEY,
  'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
  'Content-Type': 'application/json',
  'Prefer': 'return=representation'
});

/**
 * Submit a VIP consultation or contact inquiry to Supabase
 */
export async function submitInquiry({ name, email, phone = '', service = '', message = '' }) {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/inquiries`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify([{
        name,
        email,
        phone,
        service,
        message,
        status: 'pending'
      }])
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.message || `HTTP ${res.status}: Failed to submit inquiry`);
    }

    const data = await res.json();
    return { success: true, data: data[0] };
  } catch (error) {
    console.error('Error submitting inquiry to Supabase:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Submit an expedition or chalet booking reservation to Supabase
 */
export async function submitBooking({
  tourTitle,
  location = '',
  checkIn = null,
  checkOut = null,
  guests = 1,
  totalPrice = '',
  clientName,
  email,
  phone = '',
  notes = '',
  addons = []
}) {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/bookings`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify([{
        tour_title: tourTitle,
        location,
        check_in: checkIn || null,
        check_out: checkOut || null,
        guests: Number(guests) || 1,
        total_price: totalPrice,
        client_name: clientName,
        email,
        phone,
        notes,
        addons: addons || [],
        status: 'requested'
      }])
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.message || `HTTP ${res.status}: Failed to record booking`);
    }

    const data = await res.json();
    return { success: true, data: data[0] };
  } catch (error) {
    console.error('Error submitting booking to Supabase:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Subscribe an email to the Tourex Gazette newsletter in Supabase
 */
export async function subscribeNewsletter(email) {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/newsletter_subscribers`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify([{ email }])
    });

    if (!res.ok) {
      // 409 means already subscribed
      if (res.status === 409) {
        return { success: true, alreadySubscribed: true };
      }
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.message || `HTTP ${res.status}: Failed to subscribe`);
    }

    const data = await res.json();
    return { success: true, data: data[0] };
  } catch (error) {
    console.error('Error subscribing to newsletter in Supabase:', error);
    return { success: false, error: error.message };
  }
}

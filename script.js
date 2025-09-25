function showSection(sectionName) {
  // Hide all sections
  document.getElementById('dashboard-section').classList.add('hidden');
  document.getElementById('suggestions-section').classList.add('hidden');
  document.getElementById('insights-section').classList.add('hidden');

  // Show selected section
  document.getElementById(sectionName + '-section').classList.remove('hidden');

  // Update navigation
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  event.target.closest('.nav-item').classList.add('active');
}

function showNotification(message) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
}

function applySuggestion(element, message) {
  element.style.opacity = '0.5';
  element.style.pointerEvents = 'none';

  const button = element.querySelector('.btn');
  button.textContent = 'Applied ✓';
  button.style.background = '#107c10';

  showNotification(message);
}

function showMeetingDetails(meetingType) {
  const details = {
    'standup': 'Daily Standup Meeting\n\n🤖 AI Preparation:\n• Team completed 8/10 sprint items\n• 2 blockers identified yesterday\n• Sarah\'s input needed on API design\n\n⏱️ Estimated duration: 15 minutes\n👥 Essential attendees: You, John, Maria',
    'exec': 'Executive Briefing - Q4 Planning\n\n🤖 AI Brief:\n• Revenue target: $2.3M (on track)\n• 3 key decisions needed today\n• Competitor analysis attached\n• Budget approval required for Team expansion\n\n⏱️ Estimated duration: 30 minutes\n📋 Pre-read materials ready'
  };

  alert(details[meetingType] || 'Meeting details loading...');
}

// Simulate real-time updates
setInterval(() => {
  // Update focus time randomly
  const focusTimeEl = document.querySelector('.metric-value');
  if (focusTimeEl && Math.random() > 0.95) {
    const currentTime = parseFloat(focusTimeEl.textContent);
    const newTime = (currentTime + 0.1).toFixed(1);
    focusTimeEl.textContent = newTime + 'hrs';
    focusTimeEl.classList.add('pulse');
    setTimeout(() => focusTimeEl.classList.remove('pulse'), 500);
  }
}, 2000);

// Show welcome notification
setTimeout(() => {
  showNotification('Good morning, Sarah! Your day is optimized with 2.4 hours of protected focus time.');
}, 1000);

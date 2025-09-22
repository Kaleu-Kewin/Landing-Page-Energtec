export function showNotification(message, type) {
    const notification       = document.createElement('div');
    notification.className   = `notification notification-${type}`;
    notification.textContent = message;

    notification.style.cssText = `
        position: fixed; top: 20px; right: 20px;
        padding: 15px 20px; border-radius: 10px;
        color: white; font-weight: 500; z-index: 10000;
        transform: translateX(400px); transition: transform 0.3s ease;
        max-width: 300px; box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    `;

    if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
    }

    if (type === 'error') {
        notification.style.background = 'linear-gradient(135deg, #dc3545, #fd7e14)';
    }

    document.body.appendChild(notification);

    setTimeout(() => notification.style.transform = 'translateX(0)', 100);
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

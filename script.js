setInterval(() => {
    let d = new Date();

    let h_t = d.getHours();
    let m_t = d.getMinutes();
    let s_t = d.getSeconds();

    let h_rotation = h_t*30 + m_t/2;
    let m_rotation = 6*m_t;
    let s_rotation = 6*s_t;

    // Hour.style.transform = `rotate(${h_rotation}deg)`;
    // Minute.style.transform = `rotate(${m_rotation}deg)`;
    // Second.style.transform = `rotate(${s_rotation}deg)`;

    document.getElementById('Hour').style.transform = `rotate(${h_rotation}deg)`;
    document.getElementById('Minute').style.transform = `rotate(${m_rotation}deg)`;
    document.getElementById('Second').style.transform = `rotate(${s_rotation}deg)`;
}, 1000);
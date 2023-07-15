
const submitButton = document.getElementById('sub');
                submitButton.addEventListener('click', () => {
                const frn = document.getElementById('frn').value;
                const fn = document.getElementById('fn').value;
                const ln = document.getElementById('ln').value;
                if (frn && fn && ln) {
                    alert('your response will be answered in (24-72hrs)_thankyou');
                }
                });
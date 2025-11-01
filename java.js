function switchTab(tabId) {
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(content => {
                content.classList.add('hidden');
            });

            const tabButtons = document.querySelectorAll('.tab-btn');
            tabButtons.forEach(button => {
                button.classList.remove('tab-active');
                button.classList.add('tab-inactive');
            });

            document.getElementById(tabId).classList.remove('hidden');
            const activeButton = document.querySelector(`button[onclick="switchTab('${tabId}')"]`);
            activeButton.classList.add('tab-active');
            activeButton.classList.remove('tab-inactive');
        }

        const longTextLabel = (context) => {
            const label = context.dataset.labels[context.dataIndex];
            if (label.length > 16) {
                const words = label.split(' ');
                const lines = [];
                let currentLine = '';
                for (let i = 0; i < words.length; i++) {
                    if ((currentLine + words[i]).length > 16) {
                        lines.push(currentLine.trim());
                        currentLine = '';
                    }
                    currentLine += words[i] + ' ';
                }
                lines.push(currentLine.trim());
                return lines;
            }
            return label;
        };

        const ctxKnowledge = document.getElementById('knowledgeChart').getContext('2d');
        new Chart(ctxKnowledge, {
            type: 'bar',
            data: {
                labels: ['Conhecimento Pré-Workshop', 'Conhecimento Pós-Workshop'],
                datasets: [{
                    label: 'Nível de Conhecimento (Pontuação Média)',
                    data: [62, 88],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(54, 162, 235, 0.6)'
                    ],
                    borderColor: [
                        'rgba(255, 159, 64, 1)',
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        title: { display: true, text: 'Pontuação de 0 a 100' }
                    }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Pontuação: ${context.raw}`;
                            }
                        }
                    }
                }
            }
        });

        const ctxPhishing = document.getElementById('phishingChart').getContext('2d');
        new Chart(ctxPhishing, {
            type: 'doughnut',
            data: {
                labels: ['Cliques Evitados com Sucesso', 'Cliques em Links de Phishing'],
                datasets: [{
                    label: 'Resultado da Simulação',
                    data: [92, 8],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(255, 99, 132, 0.6)'
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.raw}%`;
                            }
                        }
                    }
                }
            }
        });
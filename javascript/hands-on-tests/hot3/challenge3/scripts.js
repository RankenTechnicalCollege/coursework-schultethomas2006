document.addEventListener('DOMContentLoaded', function() {


            let upvotes = 0;
            let downvotes = 0;

            const upvoteBtn = document.getElementById('upvoteBtn');
            const downvoteBtn = document.getElementById('downvoteBtn');
            const upvoteCountEl = document.getElementById('upvoteCount');
            const downvoteCountEl = document.getElementById('downvoteCount');
            const totalScoreEl = document.getElementById('totalScore');

            function updateDisplay() {
                const score = upvotes - downvotes;

                upvoteCountEl.textContent = upvotes;
                downvoteCountEl.textContent = downvotes;
                totalScoreEl.textContent = score;
            }

            upvoteBtn.addEventListener('click', function() {
                upvotes++;
                updateDisplay();
            });

            downvoteBtn.addEventListener('click', function() {
                downvotes++;
                updateDisplay();
            });
        });
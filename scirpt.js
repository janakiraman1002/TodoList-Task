document.addEventListener('DOMContentLoaded', () => {
    const beneficiaryForm = document.getElementById('beneficiaryForm');
    const beneficiaryTable = document.getElementById('beneficiaryTable').getElementsByTagName('tbody')[0];
    let beneficiaryList = [];

    // Function to render the table
    function renderTable() {
        beneficiaryTable.innerHTML = '';
        beneficiaryList.forEach((beneficiary, index) => {
            const row = beneficiaryTable.insertRow();
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${beneficiary.name}</td>
                <td>${beneficiary.relationship}</td>
                <td>${beneficiary.dob}</td>
                <td>${beneficiary.status ? '<span style="color:green;">Active</span>' : '<span style="color:red;">Inactive</span>'}</td>
                <td>
                    <button class="edit-btn" onclick="editBeneficiary(${index})">Edit</button>
                    <button class="delete-btn" onclick="deleteBeneficiary(${index})">Delete</button>
                </td>
            `;
        });
    }

    // Add new beneficiary
    beneficiaryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('beneficiaryName').value;
        const relationship = document.getElementById('relationship').value;
        const dob = document.getElementById('dob').value;

        beneficiaryList.push({ name, relationship, dob, status: true });
        renderTable();
        beneficiaryForm.reset();
    });

    // Edit beneficiary (mockup function)
    window.editBeneficiary = function(index) {
        const beneficiary = beneficiaryList[index];
        document.getElementById('beneficiaryName').value = beneficiary.name;
        document.getElementById('relationship').value = beneficiary.relationship;
        document.getElementById('dob').value = beneficiary.dob;

        // Remove the item temporarily to allow editing
        beneficiaryList.splice(index, 1);
        renderTable();
    }

    // Delete beneficiary
    window.deleteBeneficiary = function(index) {
        beneficiaryList.splice(index, 1);
        renderTable();
    }

    renderTable();
});

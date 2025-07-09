fetch('data.json')
.then(response=>response.json())
.then(data=>{
    const profileDiv=document.getElementById('profile');
    profileDiv.innerHTML=`
    <p><strong>Nmae:</strong>${data.name}</p>
    <p><strong>Email:</strong>${data.email}
    </p>
    <p><strong>Age:</strong>${data.age}</p>`;

})
.catch(error=>{
    console.error('Error loading json:',error);
    
});

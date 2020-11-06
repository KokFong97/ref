const formStore = {
    data : {
        formData : []
    },

    methods: {
        addForm(data){
            formStore.data.formData.push(data);
        },
        deleteForm(index){
            formStore.data.formData.splice(index,1);
        }
    }
};

export default formStore;
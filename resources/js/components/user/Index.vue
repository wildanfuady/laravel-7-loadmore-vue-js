<template>
    <div class='container py-4'>
        <div class='row justify-content-center'>
            <div class='col-md-8'>
            <div class='card'>
                <div class='card-header'>All User</div>
                <div class='card-body'>
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th width="50" class="text-center">No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Created At</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(user, index) in users.data" :key="user.id">
                                    <td width="50" class="text-center">{{ index + 1 }}</td>
                                    <td>{{ user.name }}</td>
                                    <td>{{ user.email }}</td>
                                    <td>{{ user.created_at | formatDate}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div v-if="users.next_page_url" class="card-footer">
                        <button @click.prevent="paginate(users.next_page_url)" type="button" class="btn btn-primary btn-block">Load More</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
</template>

<script>
export default {
    data() {
        return {
          users: {}
        }
    },
    created() {
            this.paginate();
    },
    methods: {
        paginate(url = ''){
            this.axios.get(url ? url : 'api/user')
            .then(response => {
                if(!this.users.data){
                    this.users = response.data;
                }
                else {
                    this.users.data.push(...response.data.data)
                    this.users.next_page_url = response.data.next_page_url
                }
            }).catch(error => console.log(error));
        }
    }
  }
</script>
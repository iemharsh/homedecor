

Vue.component('profile', {
    template: `
        <div>
            <auth v-on:authenticated="authenticated" v-if="!isAuth"></auth>
            <a class="button is-dark">
                <span class="icon">
                    <i class="fa fa-user"></i>
                </span>
                <span v-if="!isAuth" data-toggle="modal" data-target="#myModal">Log In/ Sign Up</span>
                <span v-if="isAuth">{{user.first_name}}</span>
            </a>
        </div>
    `,
    data() {
        return({
            isAuth: false,
            user: ''
        });
    },
    methods: {
        authenticated(user) {
            this.user = user;
            this.isAuth = true;
        }
    }
})



Vue.component('auth', {
    template: `
        <div id="myModal" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <ul class="nav nav-pills">
                        <li v-bind:class="{ active: loginMode }">
                            <a href="#" style="color: green;" @click="loginMode=true">Login</a>
                        </li>
                        <li v-bind:class="{ active: !loginMode }">
                            <a href="#" style="color: green;" @click="loginMode=false">Signup</a>
                        </li>
                    </ul>
                </div>
                <div class="modal-body">
                    <login v-if="loginMode" v-on:authenticated="authenticated"></login>
                    <signup v-if="!loginMode" v-on:authenticated="authenticated"></signup>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return({
            loginMode: true
        });
    },
    methods: {
        authenticated(user) {
            this.$emit("authenticated", user);
        }
    }
});


Vue.component('login', {
    template: `
        <div style="color: black;">
            <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" class="form-control" id="email" v-model="email">
            </div>
            <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd" v-model="password">
            </div>
            <!--
            <div class="checkbox">
                <label><input type="checkbox"> Remember me</label>
            </div>
            -->
            <button type="submit" class="btn btn-default" @click="signin">Login</button>
        </div>
    `,
    data() {
        return({
            email: '',
            password: ''
        })
    },
    methods: {
        signin() {
            $.ajax({
                type: "POST",
                url: '/auth',
                data: {
                    email: this.email,
                    password: this.password,
                },
                success: this.done
            });
        },
        done(data) {
            if(data == null || data == "" || data == undefined) {
                swal("User Not Found");
            } else {
                this.$emit('authenticated', data);
                $('#myModal').modal('hide');
                $('.fade').removeClass('modal-backdrop');
            }
        }
    }
});

Vue.component('signup', {
    template: `
        
        <div style="color: black;">
            <div class="form-group">
                <label for="fname">First Name:</label>
                <input type="text" class="form-control" id="fname" name="fname" v-model="fname">
            </div>
            
            <div class="form-group">
                <label for="lname">Last Name:</label>
                <input type="text" class="form-control" id="lname" name="lname" v-model="lname">
            </div>

            <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" class="form-control" id="email" name="email" v-model="email">
            </div>

            <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd" name="password" v-model="password">
            </div>

            <div class="form-group">
                <label for="address">Address:</label>
                <input type="password" class="form-control" id="address" name="address" v-model="address">
            </div>

            <button class="btn btn-primary" @click="signup">SignUp</button>
        </div>
    `,
    data() {
        return({
            fname: '',
            lname: '',
            email: '',
            password: '',
            address: ''
        });
    },
    methods: {
        signup() {
            $.ajax({
                type: "POST",
                url: '/user/new',
                data: {
                    first_name: this.fname,
                    last_name: this.lname,
                    email: this.email,
                    password: this.password,
                    address: this.address
                },
                success: this.done
            });
        },
        done(data) {
            console.log(data);
            swal("Registeration Successfull!");
            this.$emit('authenticated', data);
            $('#myModal').modal('hide');
            $('.fade').removeClass('modal-backdrop');
        }
    }
});



new Vue({
    el: '#root'
})


$('#myModal').modal({ show: false})

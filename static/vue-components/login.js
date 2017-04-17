

Vue.component('profile', {
    template: `
        <div>
            <auth></auth>
            <a class="button is-dark">
                <span class="icon">
                    <i class="fa fa-user"></i>
                </span>
                <span v-if="!isAuth" data-toggle="modal" data-target="#myModal">Log In/ Sign Up</span>
                <span v-if="isAuth">{{username}}</span>
            </a>
        </div>
    `,
    data() {
        return({
            isAuth: false,
            username: ''
        });
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
                        <li class="active"><a href="#" style="color: green;">Login</a></li>
                        <li><a href="#" style="color: green;">Signup</a></li>>
            
                    </ul>
                </div>
                <div class="modal-body">
                    <login></login>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    `,
});


Vue.component('login', {
    template: `
        <form style="color: black;">
            <div class="form-group">
            <label for="email">Email address:</label>
            <input type="email" class="form-control" id="email">
            </div>
            <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd">
            </div>
            <div class="checkbox">
            <label><input type="checkbox"> Remember me</label>
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    `
});

Vue.component('signup', {
    template: `
        <form style="color: black;">
            <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" class="form-control" id="email">
            </div>
            <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd">
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    `
});



new Vue({
    el: '#root'
})
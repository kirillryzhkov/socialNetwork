// import {rerender} from '.././index.js';
import reduceProfile from "./reduceProfile";
import reduceMes from "./reduceMes";

let storage = {
     _state:{
        user:{ post: [{text:'Розыгрышь 1млн долларов', id:1, like:1000}, {text:'Бургер макдокнак', id:2, like:569},
        {text:'Учусь на паре', id:3, like:1234}], newTextPost: ''},
        
        messages:{ mas: [{name:'Майк Тайсон', id:1}, {name:'Гульзира', id:2},
        {name:'Роберт Полсон', id:3},{name:'Рубен Гуд', id:4}],
         me: [{name:'Привет подпищеки1', id:1},{name: 'привет друк', id:1},{name:'Привет подпищеки2', id:2},
        {name:'Привет подпищеки3', id:3},{name:'Привет подпищеки4', id:4}], newTextMes: ''}},
        
        rerender (){
            console.log('fghfgh');
        },
        
        spec (observer){
            this.rerender = observer;
        },
        
        addPost(textPost){
            let newPost = {text: textPost, id: 4, like: 0}
            this._state.user.post.unshift(newPost);
            this._state.user.newTextPost = '';
            this.rerender(this.state);
        },
        
        addMes (textMes){
            let newMes = {name: textMes, id: 5}
            this._state.messages.me.push(newMes);
            this._state.messages.newTextMes = '';
            this.rerender(this._state);
        },
        
        editPost (text){
            this._state.user.newTextPost = text;
            console.log(text);
            this.rerender(this._state);
        },

        editMes (me){
            this._state.messages.newTextMes = me;
            console.log(me);
            this.rerender(this._state);
        },

        getState () {
            return this._state;
        },
        dispatch(action){
            this._state.user = reduceProfile(action, this._state.user);
            this.rerender(this._state);

            this._state.messages = reduceMes(action, this._state.messages);
            this.rerender(this._state);
        }
}










export default storage;

import mongosoe from 'mongoose';

const connectDB = (url) => {
    mongosoe.set('strictQuery', true);

    mongosoe.connect(url).then(()=> console.log('MongoDB Connected'))
    .catch((err) => console.log(err))

}

export default connectDB;
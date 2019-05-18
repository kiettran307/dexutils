var Memcached = require('memcached');
// require('../config/environment');
const maxlifetime =  60*60*24*30;
const { promisify } = require('util');
const MEMCACHED_URL = process.env.MEMCACHED_URL || "127.0.0.1:11211";
const memcached = new Memcached(MEMCACHED_URL);//127.0.0.1:11211
// const memcached = new Memcached("127.0.0.1:11211");
const memcachedGet = promisify(memcached.get).bind(memcached);
const memcachedSet = promisify(memcached.set).bind(memcached);
const memcachedDel = promisify(memcached.del).bind(memcached);

const MemcacheHandler = {
    async setMemcacheItem(key, value) {
      try {
        memcachedSet(key, value, maxlifetime);
      } catch (error) {
        console.log('error: ', error.message);
      }
    },
    async removeMemcacheItem(key) {
        try {
           await memcachedDel(key);
           console.log('key deleted: ', key);
        } catch (error) {
          console.log('error: ', error.message);
        }
      },
    async getMemcacheItem(key) {
        try {
            const data = await memcachedGet(key); 
            console.log('data ', data);
        } catch (error) {
          console.log('error: ', error.message);
        }
      }
  };
  module.exports = MemcacheHandler;
//   MemcacheHandler.setMemcacheItem('foo', 'bar');
//   MemcacheHandler.getMemcacheItem('foo');
//   MemcacheHandler.removeMemcacheItem('foo');

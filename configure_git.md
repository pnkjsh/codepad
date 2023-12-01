# Configure Git with a proxy

### Setting a global proxy

Configure a global proxy if all access to all repos require this proxy

```
git config --global http.proxy http://proxyUsername:proxyPassword@proxy.server.com:port
```
You can configure these globally in your user `~/.gitconfig` file using the `--global` switch, or local to a repository in its `.git/config` file.
- Example
```
git config --global http.proxy http://<user>:<pwd>@se1-mwg-p03.schwarz:8081
&&
git config --global https.proxy http://<user>:<pwd>@se1-mwg-p03.schwarz:8081
```

### Node.js server
If you are using Node server you need to set proxy for npm
```
npm config set http://<user>:<password>@proxy.server.com:port
```
- Example
```
npm config set proxy http://<user>:<pwd>$@se1-mwg-p03.schwarz:8081
npm config set https-proxy http://<user>:<pwd>$@se1-mwg-p03.schwarz:8081
```

### Unset a proxy
If you decide at any time to reset this proxy and work without proxy, the command to use:
```
git config --global --unset http.proxy
```
Finally, to check the currently-set proxy:
```
git config --global --get http.proxy
```
Use the `--unset` flag to remove configuration being specific about the property -- for example whether it was `http.proxy` or `http.<url>.proxy`. 

### Unset SSL verification
Use the `--unset` flag to remove configuration.
Consider using any of the following:

```
git config --global --unset http.sslVerify
git config --global --unset http.https://domain.com.sslVerify
```
If you choose to make it global then limit it to a URL using 
the `http.<url>.sslVerify` notation: 

```
git config --global http.https://domain.com.sslVerify false
```
#### Handle subsequent SSL protocol errors

If you're still having trouble cloning or fetching and are now getting 
an `unable to access 'https://...': Unknown SSL protocol error in connection to ...:443` then
you may decide to switch off SSL verification for the single operation 
by using the `-c http.sslVerify=false` option

```
git -c http.sslVerify=false clone https://domain.com/path/to/git
```

Once cloned, you may decide set this for just this cloned 
repository's `.git/config` by doing. Notice the absence of the `--global`

```
git config http.sslVerify false
```

If you choose to make it global then limit it to a URL using 
the `http.<url>.sslVerify` notation: 

```
git config --global http.https://domain.com.sslVerify false
```

### Set SSL verification
If you want to use a updated certificate use this command.
```
git config --system http.sslcainfo /bin/<ca-file>.crt
```

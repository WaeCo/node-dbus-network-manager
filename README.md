# Node Dbus Network Manager

NodeJs DBus bindings for [Network-Manager](https://wiki.gnome.org/Projects/NetworkManager).

Generated using [dbus-next](https://github.com/dbusjs/node-dbus-next) interface generator for version 1.10.6

For Network-Manager API docs see: https://developer.gnome.org/NetworkManager/stable/spec.html

## Usage:
```js
import * as DBus from "dbus-next";
import { NetworkManager, Device, DeviceStatistics } from ".";

async function run() {
    const bus = DBus.systemBus();

    const nm = await NetworkManager.Connect(bus);
    console.log(await nm.Version());

    const devs = await nm.Devices();
    console.log(devs);
    const dev = await Device.Connect(bus, devs[0]);
    console.log(await dev.Interface());

    const devStat = await DeviceStatistics.Connect(bus, devs[0]);
    console.log(await devStat.TxBytes());

    const conEn = await nm.ConnectivityCheckEnabled();
    await nm.ConnectivityCheckEnabled(!conEn);
    console.log(!conEn);

    bus.disconnect();
}
run();

```

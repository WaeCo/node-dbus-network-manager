import * as DBus from 'dbus-next';
import { EventEmitter } from 'events';

/*
 * Generated by dbus-next interface generator
 * Template: typescript-class.ts.hbs
 */


/**
 * Service: org.freedesktop.NetworkManager
 * ObjectPath: /org/freedesktop/NetworkManager/ActiveConnection/*
 * Interface: org.freedesktop.NetworkManager.Connection.Active
 */
export class ConnectionActive extends EventEmitter {

    public readonly dbusInterfaceName = 'org.freedesktop.NetworkManager.Connection.Active';
    public dbusObject: DBus.ProxyObject;
    public propertiesDBusInterface: DBus.ClientInterface;
    public thisDBusInterface: DBus.ClientInterface;

    public static Connect(bus: DBus.MessageBus, objectPath: string, xml?: string): Promise<ConnectionActive> {
        return bus.getProxyObject('org.freedesktop.NetworkManager', objectPath, xml).then((obj) => new ConnectionActive(obj));
    }

    constructor(dbusObject: DBus.ProxyObject) {
        super();
        this.dbusObject = dbusObject;
        this.thisDBusInterface = this.dbusObject.getInterface('org.freedesktop.NetworkManager.Connection.Active');
        this.propertiesDBusInterface = this.dbusObject.getInterface('org.freedesktop.DBus.Properties');

        // forward property change events
        const forwardPropertyChange = (iface: string, changed: any, invalidated: any) => {
            if(iface === this.dbusInterfaceName) {
                this.emit('PropertiesChanged', iface, changed, invalidated);
            }
        }

        // forward all signals
        this.on("newListener", (event: string, listener: (...args: any[]) => void) => {
            if(event === "PropertiesChanged" && this.listenerCount('PropertiesChanged') === 0) {
                this.propertiesDBusInterface.on('PropertiesChanged', forwardPropertyChange);
            } else {
                this.thisDBusInterface.on(event, listener);
            }
        });
        this.on("removeListener", (event: string, listener: (...args: any[]) => void) => {
            if(event === "PropertiesChanged" && this.listenerCount('PropertiesChanged') === 0) {
                this.propertiesDBusInterface.removeListener('PropertiesChanged', forwardPropertyChange);
            } else {
                this.thisDBusInterface.removeListener(event, listener);
            }
        });
    }

    /***** Properties *****/

    public getProperties(): Promise<{[name: string]: DBus.Variant}> {
        return this.propertiesDBusInterface.GetAll(this.dbusInterfaceName);
    }

    public getProperty(name: string): Promise<DBus.Variant> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, name);
    }

    public setProperty(name: string, value: DBus.Variant): Promise<void> {
        return this.propertiesDBusInterface.Set(this.dbusInterfaceName, name, value);
    }

    //@property({ name: 'Connection', signature: 'o', access: ACCESS_READ })
    public Connection(): Promise<DBus.ObjectPath> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'Connection').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'SpecificObject', signature: 'o', access: ACCESS_READ })
    public SpecificObject(): Promise<DBus.ObjectPath> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'SpecificObject').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'Id', signature: 's', access: ACCESS_READ })
    public Id(): Promise<string> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'Id').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'Uuid', signature: 's', access: ACCESS_READ })
    public Uuid(): Promise<string> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'Uuid').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'Type', signature: 's', access: ACCESS_READ })
    public Type(): Promise<string> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'Type').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'Devices', signature: 'ao', access: ACCESS_READ })
    public Devices(): Promise<Array<DBus.ObjectPath>> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'Devices').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'State', signature: 'u', access: ACCESS_READ })
    public State(): Promise<number> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'State').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'StateFlags', signature: 'u', access: ACCESS_READ })
    public StateFlags(): Promise<number> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'StateFlags').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'Default', signature: 'b', access: ACCESS_READ })
    public Default(): Promise<boolean> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'Default').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'Ip4Config', signature: 'o', access: ACCESS_READ })
    public Ip4Config(): Promise<DBus.ObjectPath> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'Ip4Config').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'Dhcp4Config', signature: 'o', access: ACCESS_READ })
    public Dhcp4Config(): Promise<DBus.ObjectPath> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'Dhcp4Config').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'Default6', signature: 'b', access: ACCESS_READ })
    public Default6(): Promise<boolean> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'Default6').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'Ip6Config', signature: 'o', access: ACCESS_READ })
    public Ip6Config(): Promise<DBus.ObjectPath> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'Ip6Config').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'Dhcp6Config', signature: 'o', access: ACCESS_READ })
    public Dhcp6Config(): Promise<DBus.ObjectPath> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'Dhcp6Config').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'Vpn', signature: 'b', access: ACCESS_READ })
    public Vpn(): Promise<boolean> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'Vpn').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'Master', signature: 'o', access: ACCESS_READ })
    public Master(): Promise<DBus.ObjectPath> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'Master').then((variant: DBus.Variant) => variant.value);
    }


    /***** Methods *****/

}
/***** Signals for org.freedesktop.NetworkManager.Connection.Active *****/
export declare interface ConnectionActive {
    //@signal({ name: 'StateChanged', signature: 'uu' })
    on(evt: "StateChanged", cb: (state: number, reason: number) => void): this;
    //@signal({ name: 'PropertiesChanged', signature: 'a{sv}' })
    on(evt: "PropertiesChanged", cb: (properties: {[key: string]: DBus.Variant}) => void): this;
    on(evt: "PropertiesChanged", cb: (iface: string, changedProperties: {[key:string]: any}, invalidatedProperties: string[]) => void): this;
    on(event: string, listener: Function): this;
}


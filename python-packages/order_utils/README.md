## 0x-order-utils

0x order-related utilities for those developing on top of 0x protocol.

Read the [documentation](https://0x.readthedocs.io/projects/order-utils/en/latest/)

## Installing

```bash
pip install 0x-order-utils
```

## Contributing

We welcome improvements and fixes from the wider community! To report bugs within this package, please create an issue in this repository.

Please read our [contribution guidelines](../../CONTRIBUTING.md) before getting started.

### Install Code and Dependencies

Ensure that you have installed Python >=3.6 and [ganache-cli](https://www.npmjs.com/package/ganache-cli). Then:

```bash
pip install -e .[dev]
```

### Test

Tests depend on a running ganache instance, using the snapshot stored in the repo. In a separate terminal window, start ganache via `./setup.py ganache`. Then the tests can be run with `./setup.py test`.

### Clean

`./setup.py clean --all`

### Lint

`./setup.py lint`

### Build Documentation

`./setup.py build_sphinx`

### More

See `./setup.py --help-commands` for more info.

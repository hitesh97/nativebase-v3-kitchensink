import React, { useState } from 'react';
import {
  Popover,
  Button,
  VStack,
  Stack,
  Radio,
  Select,
  useBreakpointValue,
  CheckIcon,
} from 'native-base';

export function Example() {
  const [position, setPosition] = useState('auto');
  const isTabletScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
  });
  return (
    <VStack space={6} alignSelf="flex-start" w="100%">
      <Popover
        placement={position == 'auto' ? undefined : position}
        trigger={(triggerProps) => {
          return (
            <Button alignSelf="center" {...triggerProps}>
              Trigger
            </Button>
          );
        }}
      >
        <Popover.Content>
          <Popover.Arrow />
          <Popover.CloseButton />
          <Popover.Header>Data Saved</Popover.Header>
          <Popover.Body>Your changes has been saved.</Popover.Body>
        </Popover.Content>
      </Popover>
      {isTabletScreen ? (
        <Select
          selectedValue={position}
          // minWidth={200}
          mx="auto"
          accessibilityLabel="Select your favorite programming language"
          placeholder="Select your favorite programming language"
          onValueChange={(nextValue) => setPosition(nextValue)}
          _selectedItem={{
            bg: 'cyan.600',
            endIcon: <CheckIcon size={4} />,
          }}
        >
          <Select.Item label="auto" value="auto" />
          <Select.Item label="Top Left" value="top left" />
          <Select.Item label="Top" value="top" />
          <Select.Item label="Top Right" value="top right" />
          <Select.Item label="Right Top" value="right top" />
          <Select.Item label="Right" value="right" />
          <Select.Item label="Right Bottom" value="right bottom" />
          <Select.Item label="Bottom Left" value="bottom left" />
          <Select.Item label="Bottom" value="bottom" />
          <Select.Item label="Bottom Right" value="bottom right" />
          <Select.Item label="Left Top" value="left top" />
          <Select.Item label="Left" value="left" />
          <Select.Item label="Left Bottom" value="left bottom" />
        </Select>
      ) : (
        <Radio.Group
          name="exampleGroup"
          mt={4}
          value={position}
          onChange={(nextValue) => setPosition(nextValue)}
        >
          <Radio
            value="auto"
            colorScheme="green"
            mb={{ base: 2, md: 4 }}
            _text={{ fontWeight: 500 }}
          >
            Auto
          </Radio>
          <Radio
            value="top left"
            colorScheme="green"
            mb={{ base: 2, md: 4 }}
            _text={{ fontWeight: 500 }}
          >
            Top Left
          </Radio>
          <Radio
            value="top"
            colorScheme="green"
            mb={{ base: 2, md: 4 }}
            _text={{ fontWeight: 500 }}
          >
            Top
          </Radio>
          <Radio
            value="top right"
            colorScheme="green"
            mb={{ base: 2, md: 4 }}
            _text={{ fontWeight: 500 }}
          >
            Top Right
          </Radio>
          <Radio
            value="right top"
            colorScheme="green"
            mb={{ base: 2, md: 4 }}
            _text={{ fontWeight: 500 }}
          >
            Right Top
          </Radio>
          <Radio
            value="right"
            colorScheme="green"
            mb={{ base: 2, md: 4 }}
            _text={{ fontWeight: 500 }}
          >
            Right
          </Radio>
          <Radio
            value="right bottom"
            colorScheme="green"
            mb={{ base: 2, md: 4 }}
            _text={{ fontWeight: 500 }}
          >
            Right Bottom
          </Radio>
          <Radio
            value="bottom left"
            colorScheme="green"
            mb={{ base: 2, md: 4 }}
            _text={{ fontWeight: 500 }}
          >
            Bottom Left
          </Radio>
          <Radio
            value="bottom"
            colorScheme="green"
            mb={{ base: 2, md: 4 }}
            _text={{ fontWeight: 500 }}
          >
            Bottom
          </Radio>
          <Radio
            value="bottom right"
            colorScheme="green"
            mb={{ base: 2, md: 4 }}
            _text={{ fontWeight: 500 }}
          >
            Bottom Right
          </Radio>
          <Radio
            value="left top"
            colorScheme="green"
            mb={{ base: 2, md: 4 }}
            _text={{ fontWeight: 500 }}
          >
            Left Top
          </Radio>
          <Radio
            value="left"
            colorScheme="green"
            mb={{ base: 2, md: 4 }}
            _text={{ fontWeight: 500 }}
          >
            Left
          </Radio>
          <Radio
            value="left bottom"
            colorScheme="green"
            mb={{ base: 2, md: 4 }}
            _text={{ fontWeight: 500 }}
          >
            Left Bottom
          </Radio>
        </Radio.Group>
      )}
    </VStack>
  );
}

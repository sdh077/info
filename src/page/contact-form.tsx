'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import Cookies from "js-cookie"

import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { Checkbox } from "@/components/ui/checkbox"
const items = [
  {
    id: "카공",
    label: "카공",
  },
  {
    id: "뷰",
    label: "뷰",
  },
  {
    id: "원두",
    label: "원두",
  },
  {
    id: "디저트",
    label: "디저트",
  }
] as const
const FormSchema = z.object({
  name: z.string().min(1, {
    message: "카페이름을 입력해주세요",
  }),
  purpose: z.array(z.string()),
  description: z.string().min(2, {
    message: "description must be at least 2 characters.",
  })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),

})

const ContactForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      description: "",
      purpose: [],
    },
  })
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const user = JSON.parse(Cookies.get('user') ?? '{}')
    try {
      const response = await fetch(`/api/contact`, {
        method: 'POST',
        body: JSON.stringify({ ...data, email: user.id, purpose: data.purpose.join(',') }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const result = await response.json();
      toast({
        title: `${user.email}님 감사합니다 확인 후 연락드리겠습니다`
      })
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6 p-10 rounded-xl">
        <h3 className="text-4xl text-primary">카페를 추천해주세요</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>카페명</FormLabel>
                <FormControl>
                  <Input placeholder="카페의 이름을 입력해주세요" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="purpose"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">추천 요소</FormLabel>
              </div>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="purpose"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                  field.value?.filter(
                                    (value) => value !== item.id
                                  )
                                )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="전달 사항을 적어주세요"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="max-w-40">Send message</Button>
      </form>
    </Form>
  )
}

export default ContactForm
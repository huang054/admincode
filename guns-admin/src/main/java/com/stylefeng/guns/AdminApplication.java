package com.stylefeng.guns;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.logging.Logger;

/**
 * SpringBoot方式启动类
 *
 * @author stylefeng
 * @Date 2017/5/21 12:06
 */
@SpringBootApplication
@Slf4j
public class AdminApplication {


    private static ApplicationContext applicationContext;

    public static void main(String[] args) {
        applicationContext = SpringApplication.run(AdminApplication.class, args);
    //   log.info("GunsApplication is success!");
    }

    /**
     * 根据类型获取bean的实例对象
     */
    public static <T> T getBean(Class<T> tClass){
        return applicationContext.getBean(tClass);
    }

    /**
     * 根据beanName从spring容器中获取对象
     */
    public static Object getBean(String beanName) {
        return applicationContext.getBean(beanName);
    }


    /**
     * 从spring容器中获取配置文件的属性
     */
    public static String getProperty(String key) {
        return applicationContext.getEnvironment().getProperty(key);
    }

}
